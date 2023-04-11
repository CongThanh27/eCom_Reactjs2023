import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        user: {},
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },

    }
});
export const { setUser } = counterSlice.actions;
export default counterSlice.reducer;