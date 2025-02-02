import { Server as SocketIOServer} from 'socket.io';
import http from 'http';

export const initSocketServer = (server: http.Server) => {
    const io = new SocketIOServer(server);

    io.on('connection', (socket) => {
        console.log("user connected");

        // listen for notification event from the frontend
        socket.on('notification', (data) => {
            // emit the notification to all connected clients (admin dashboard)
            io.emit('newNotification', data);
        })

        socket.on('disconnect', () => {
            console.log('user disconnected');
        })
    })
}