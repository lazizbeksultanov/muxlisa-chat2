import {configureStore, combineReducers} from "@reduxjs/toolkit";
import counterReducer from "@/slices/counterSlice"


export const store = configureStore({
    reducer: {
        counterReducer,
    }
})