import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductDto } from '../../types';

const initialState = {
  products: <ProductDto[]>[],
};

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductDto>) => {
      return { ...state, products: [...state.products, action.payload] };
    },
    setProducts: (state, action: PayloadAction<ProductDto[]>) => {
      return { ...state, products: action.payload };
    },
    clearCart: (state) => {
      return { ...state, products: [] };
    },
    removeTier: (state, action: PayloadAction<ProductDto>) => {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload.id,
        ),
      };
    },
    removeOne: (state, action: PayloadAction<ProductDto>) => {
      const removeIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      return {
        ...state,
        products: state.products.filter((_, index) => index != removeIndex),
      };
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProduct, clearCart, removeTier, removeOne, setProducts } =
  cartSlice.actions;
