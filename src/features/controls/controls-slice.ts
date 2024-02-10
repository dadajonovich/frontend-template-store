import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CategoryDto, Status } from '../../types/index';

export const loadСategories = createAsyncThunk<
  CategoryDto[],
  void,
  { rejectValue: string }
>('@@controls/load-categories', async (_, { rejectWithValue }) => {
  try {
    const responce = await fetch('http://localhost:3000/api/categories');
    const categories: CategoryDto[] = await responce.json();
    return categories;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue('Unknown error');
  }
});

type CategorySlice = {
  status: Status;
  error: string | null;
  categories: CategoryDto[];
};

const initialState: CategorySlice = {
  status: 'idle',
  error: null,
  categories: [],
};

const categorySlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadСategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadСategories.fulfilled, (state, action) => {
        state.status = 'received';
        state.categories = action.payload;
      })
      .addCase(loadСategories.rejected, (state, action) => {
        console.log(action);
        state.status = 'rejected';
        if (!action.payload) {
          state.error = 'Unknow error';
        } else state.error = action.payload;
      });
  },
});

export const categoryReducer = categorySlice.reducer;
