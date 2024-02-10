import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { CategoryDto, ProductDto, Status } from '../../types/index';

export const loadProducts = createAsyncThunk<
  ProductDto[],
  void,
  { rejectValue: string }
>('@@data/load-products', async (_, { rejectWithValue }) => {
  try {
    const responce = await fetch('http://localhost:3000/api/productss');
    const products: ProductDto[] = await responce.json();
    return products;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue('Unknown error');
  }
});

export const loadСategories = createAsyncThunk<
  CategoryDto[],
  void,
  { rejectValue: string }
>('@@data/load-categories', async (_, { rejectWithValue }) => {
  try {
    const responce = await fetch('http://localhost:3000/api/categoriess');
    const categories: CategoryDto[] = await responce.json();
    return categories;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue('Unknown error');
  }
});

type DataSlice = {
  status: Status;
  error: string | null;
  products: ProductDto[];
  categories: CategoryDto[];
};

const initialState: DataSlice = {
  status: 'idle',
  error: null,
  products: [],
  categories: [],
};

const dataSlice = createSlice({
  name: '@@data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'received';
        state.products = action.payload;
      })
      .addCase(loadСategories.fulfilled, (state, action) => {
        state.status = 'received';
        state.categories = action.payload;
      })
      .addMatcher(
        isAnyOf(loadProducts.pending, loadСategories.pending),
        (state) => {
          state.status = 'loading';
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(loadProducts.rejected, loadСategories.rejected),
        (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        },
      );
  },
});

export const dataReducer = dataSlice.reducer;
