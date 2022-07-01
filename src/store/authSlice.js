import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "user",
  initialState: { user: {} },
  reducers: {
    userInit(state, action) {
      console.log("in slice init");
      state.user = action.payload;
    },
    logOut(state) {
      state.user = {};
    },
  },
});

export default AuthSlice;

export const authAction = AuthSlice.actions;
