// store/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlistItem: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;