import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { themeReducer } from './features/theme/theme-slice';
import { productReducer } from './features/products/product-slice';
import { categoryReducer } from './features/controls/controls-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productReducer,
    categories: categoryReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
