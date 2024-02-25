import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: true,
  value: '',
};

const searchSlice = createSlice({
  name: '@@search',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      return { ...state, isVisible: action.payload, value: '' };
    },
  },
});

export const { setValue, setVisible } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
