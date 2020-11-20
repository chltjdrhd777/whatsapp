import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { userInfo: null },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = null;
    },
  },
});

export default user;

export const { login, logout } = user.actions;
