import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  countCartItems: 0,
  items: [],
  sumPrice: 0,
};

const cartSlice = createSlice({
  name: "@@cart"
  initialState,

})