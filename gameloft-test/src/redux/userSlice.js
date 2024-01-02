import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      role: "",
      language: [],
      isPrefed: false,
      app: "",
      checkboxSubmit: false,
    },
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { info } = userSlice.actions;
export default userSlice.reducer;
