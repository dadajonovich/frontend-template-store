import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryProducts } from '../../types';

import { CategoryDto, ProductDto } from '../../types';

export const dataApi = createApi({
  reducerPath: '@@data',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], QueryProducts | void>({
      query: (args) => {
        if (!args) return 'products';

        const strs: string[] = Object.entries(args)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => `${key}=${value}`);

        if (strs.length === 0) return 'products';

        return `products?${strs.join('&')}`;
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
  useGetCategoriesQuery,
  useGetProductsQuery,
} = dataApi;
