import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../slices/chatSlice"

export function makeStore() {
    return configureStore({
        reducer: {
            chat: chatReducer,
        },
    })
}

export const store = makeStore();