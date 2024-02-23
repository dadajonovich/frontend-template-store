import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductDto } from '../../types';

const initialState = {
  products: <ProductDto[]>[],
};

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductDto>) => {
      state.products = [...state.products, action.payload];
    },
    clear: (state) => {
      state.products = [];
    },
    remove: (state, action: PayloadAction<ProductDto>) => {
      state.products.filter((product) => product.id != action.payload.id);
    },
  },
});
