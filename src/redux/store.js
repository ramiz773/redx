import { configureStore } from "@reduxjs/toolkit";
import cartReducres from "./cart";
const store = configureStore({
  reducer: { cart: cartReducres },
});

export default store;
