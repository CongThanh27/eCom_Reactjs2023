import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        user: {},
        modelLogin: false,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setModeLogin(state, action) {
            state.modelLogin = action.payload;
            console.log(state.modelLogin);
        }

    }
});
export const { setUser,setModeLogin } = counterSlice.actions;
export default counterSlice.reducer;