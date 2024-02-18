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
      state.value = action.payload;
    },
    clearValue: (state) => {
      state.value = '';
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
      state.value = '';
    },
  },
});

export const { setValue, clearValue, setVisible } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
