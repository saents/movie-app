import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "movies",
    initialState: {
        isSidebarOpen: false,
    },
    reducers: {
        setIsSidebarOpen: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const {
  setIsSidebarOpen
} = sidebarSlice.actions;

export default sidebarSlice.reducer;