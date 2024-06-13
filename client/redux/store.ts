'use client'
import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./features/api/apiSlice"
import authSlice from "./features/auth/authSlice"
import { CgGames } from "react-icons/cg"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

// load user func on every page load
const initializeApp = async () => {
    // await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, {forceRefetch: true}));

    await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, {forceRefetch: true}));
};

initializeApp();
