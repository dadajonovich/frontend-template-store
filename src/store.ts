import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { themeReducer } from './features/theme/theme-slice';
import { dataReducer } from './features/data/data-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
