import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 0,
  },
  reducers: {
    next: (state, action) => {
      state.value++;
    },
    back: (state, action) => {
      state.value--;
    },
  },
});

export const { back, next } = pageSlice.actions;
export default pageSlice.reducer;