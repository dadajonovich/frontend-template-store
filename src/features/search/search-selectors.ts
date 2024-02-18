import { RootState } from '../../store';

export const selectSearch = (state: RootState) => state.search.value;
export const selectSearchVisible = (state: RootState) => state.search.isVisible;
