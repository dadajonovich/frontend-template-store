import { useCallback, useEffect } from 'react';
import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';

import {
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
} from '../features/data/data-api';
import { Skeleton } from '../components/Skeleton';

export const Home = () => {
  const [getProducts, { data: products }] = useLazyGetProductsQuery();

  const { data: categories } = useGetCategoriesQuery();

  useEffect(() => void getProducts(), [getProducts]);

  const handleChangeCategory = useCallback(
    (index: number) => {
      if (!categories) return;
      const category = categories[index - 1];
      getProducts(category?.id);
    },
    [categories],
  );

  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        {!categories ? (
          <Skeleton width={310} height={40} />
        ) : (
          <Tabs
            onChange={handleChangeCategory}
            items={['Все', ...categories.map((item) => item.title)]}
          />
        )}
        <Select />
      </section>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-16">
        {!products
          ? [...new Array(6)].map((_, index) => (
              <Skeleton width={96} height={96} key={index} />
            ))
          : products.map((item) => <Card key={item.id} {...item} />)}
      </section>
    </>
  );
};
