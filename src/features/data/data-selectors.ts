import { RootState } from '../../store';

export const selectData = (state: RootState) => state.data;
export const selectAllProducts = (state: RootState) => state.data.products;
export const selectCategories = (state: RootState) => state.data.categories;
