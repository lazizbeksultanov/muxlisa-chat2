import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    data: [],
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setTitle, setData } = chatSlice.actions;
export default chatSlice.reducer;