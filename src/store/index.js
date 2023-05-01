import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/slices/counterSlice"
import {userApi} from "@/services/UserService"
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: {
        counterReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(userApi.middleware),
})

setupListeners(store.dispatch)