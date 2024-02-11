import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CategoryDto, ProductDto } from '../../types';

export const dataApi = createApi({
  reducerPath: '@@data',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductDto[],
      { id?: number; sortItem?: string } | void
    >({
      query: (args) => {
        if (!args) return 'products';
        const { id, sortItem } = args;
        if (id !== undefined && sortItem !== undefined) {
          return `products?category=${id}&sort=${sortItem}`;
        }
        if (id !== undefined) {
          return `products?category=${id}`;
        }
        if (sortItem !== undefined) {
          return `products?sort=${sortItem}`;
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

export const { useLazyGetProductsQuery, useGetCategoriesQuery } = dataApi;
