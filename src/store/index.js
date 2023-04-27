import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../slices/chatSlice"
import {chatSlice} from "@/store/reducers/chatSlice";
import counterReducer from "../slices/counterSlice"

export const store =  configureStore({
    reducer: {
        // counterReducer,
    }
})