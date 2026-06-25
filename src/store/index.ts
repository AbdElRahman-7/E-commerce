import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
