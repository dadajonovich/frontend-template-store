import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QueryProducts, SortId } from '../../types';

const initialState: QueryProducts = {};

const controlSlice = createSlice({
  name: '@@control',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      return { ...state, categoryId: action.payload };
    },
    setSortId: (state, action: PayloadAction<SortId>) => {
      return { ...state, sortId: action.payload };
    },
    setPage: (state, action: PayloadAction<number>) => {
      return { ...state, page: action.payload };
    },
    setEmpty: () => {
      return {};
    },
  },
});

export const { setCategoryId, setPage, setSortId, setEmpty } =
  controlSlice.actions;
export const controlReducer = controlSlice.reducer;
