import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, { product: action.payload, quantity: 1 }];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item: any) => item.product.id !== action.payload
      );
    },
  },
});
