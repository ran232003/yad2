import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import CartSlice from "./cartSlice";

const store = configureStore({
  reducer: { auth: AuthSlice.reducer, cart: CartSlice.reducer },
});
export default store;
