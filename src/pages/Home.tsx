import { useCallback, useEffect } from 'react';
import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';

import {
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
} from '../features/data/data-api';

export const Home = () => {
  const [getProducts, { data: products, isLoading: isLoadingProducts }] =
    useLazyGetProductsQuery();

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  useEffect(() => void getProducts(), [getProducts]);

  const handleChangeCategory = useCallback((index: number) => {
    if (!categories) return;
    const category = categories[index - 1];
    getProducts(category?.id);
  }, []);

  if (isLoadingProducts || isLoadingCategories) return <h1>Loading...</h1>;
  if (!products || !categories) return <div>Missing data</div>;

  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        <Tabs
          onChange={handleChangeCategory}
          items={['Все', ...categories.map((item) => item.title)]}
        />
        <Select />
      </section>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-6">
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};
