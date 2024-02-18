export type SortId = 'priceAsc' | 'priceDesc' | 'abcAsc' | 'abcDesc';

export type QueryProducts = {
  categoryId?: number;
  sortId?: SortId;
  search?: string;
  page?: number;
  limit?: number;
};
