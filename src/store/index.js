import {configureStore, combineReducers} from "@reduxjs/toolkit";
import chatReducer from "@/store/slices/chatSlice"

export const store = configureStore({
    reducer: {
        chatReducer
    }
})