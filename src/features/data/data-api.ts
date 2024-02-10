import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CategoryDto, ProductDto } from '../../types';

export const dataApi = createApi({
  reducerPath: 'data',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], void>({
      query: () => 'products',
    }),
    getCategories: builder.query<CategoryDto[], void>({
      query: () => 'categories',
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = dataApi;
