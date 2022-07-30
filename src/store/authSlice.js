import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "user",
  initialState: { user: {}, location: {} },
  reducers: {
    userInit(state, action) {
      console.log("in slice init");
      state.user = action.payload;
    },
    logOut(state) {
      state.user = {};
    },
    myLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export default AuthSlice;

export const authAction = AuthSlice.actions;
