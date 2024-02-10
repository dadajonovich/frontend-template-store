import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductDto, Status } from '../../types/index';

export const loadProducts = createAsyncThunk<
  ProductDto[],
  void,
  { rejectValue: string }
>('@@products/load-products', async (_, { rejectWithValue }) => {
  try {
    const responce = await fetch('http://localhost:3000/api/products');
    const products: ProductDto[] = await responce.json();
    return products;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue('Unknown error');
  }
});

type ProductSlice = {
  status: Status;
  error: string | null;
  products: ProductDto[];
};

const initialState: ProductSlice = {
  status: 'idle',
  error: null,
  products: [],
};

const productSlice = createSlice({
  name: '@@products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'received';
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        console.log(action);
        state.status = 'rejected';
        if (!action.payload) {
          state.error = 'Unknow error';
        } else state.error = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
