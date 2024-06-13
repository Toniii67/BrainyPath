import { redirect } from 'next/navigation'
import React from "react"
import { useSelector } from 'react-redux'

interface ProtectedProps {
    children: React.ReactNode;
}

export default function adminProtected({children}: ProtectedProps){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useSelector((state: any) => state.auth);
    if(user){
        const isAdmin = user?.role === "admin";
        return isAdmin ? children : redirect('/');
    }
}