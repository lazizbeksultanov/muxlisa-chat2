import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload;
        }
    }
})

export default chatSlice.reducer;