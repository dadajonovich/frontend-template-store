import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CategoryDto, ProductDto } from '../../types';

export const dataApi = createApi({
  reducerPath: '@@data',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], number | void>({
      query: (id) => {
        if (id !== undefined) {
          return `products?category=${id}`;
        }
        return 'products';
      },
    }),
    getCategories: builder.query<CategoryDto[], void>({
      query: () => {
        return 'categories';
      },
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useGetProductsQuery,
  useGetCategoriesQuery,
} = dataApi;
