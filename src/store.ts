import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { themeReducer } from './features/theme/theme-slice';
import { searchReducer } from './features/search/search-slice';
import { dataApi } from './features/data/data-api';
import { controlReducer } from './features/control/control-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [dataApi.reducerPath]: dataApi.reducer,
    search: searchReducer,
    control: controlReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
