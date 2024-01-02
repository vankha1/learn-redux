import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    role: "",
    language: [],
    isPrefed: false,
    app: "",
    checkboxSubmit: false,
  },
  submitInfo: {
    username: '',
    email: '',
    isReceivedSummary: false,
    isContacted: false
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
    profile: (state, action) => {
      state.submitInfo = action.payload;
    },
    reset: () => initialState
  },
});

export const { info, profile, reset } = userSlice.actions;
export default userSlice.reducer;
