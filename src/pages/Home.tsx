import { useCallback, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';

import {
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
} from '../features/data/data-api';
import { Skeleton } from '../components/Skeleton';
import { QueryProducts } from '../types';

enum sortItems {
  sortBy = 'Сортировать по...',
  priceAsc = 'цене (ASC)',
  priceDesc = 'цене (DESC)',
  abcAsc = 'алфавиту (ASC)',
  abcDesc = 'алфавиту (DESC)',
}

export const Home = () => {
  const [queryProducts, setQueryProducts] = useState<QueryProducts>({});
  const [getProducts, { data: products }] = useLazyGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  useEffect(
    () => void getProducts(queryProducts),
    [getProducts, queryProducts],
  );

  const handleChangeCategory = useCallback(
    (index: number) => {
      if (!categories) return;
      const category = categories[index - 1];
      setQueryProducts((prevState) => ({
        ...prevState,
        categoryId: category?.id,
      }));
    },
    [categories],
  );

  const handleChangeSort = useCallback(
    (index: number) => {
      if (!sortItems) return;
      setQueryProducts((prevState) => ({
        ...prevState,
        sortId: Object.keys(sortItems)[index],
      }));
    },
    [sortItems],
  );

  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        {!categories ? (
          <Skeleton width={300} height={38} />
        ) : (
          <Tabs
            onChange={handleChangeCategory}
            items={['Все', ...categories.map((item) => item.title)]}
          />
        )}
        <Select onChange={handleChangeSort} items={Object.values(sortItems)} />
      </section>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-16">
        {!products
          ? [...new Array(4)].map((_, index) => (
              <Skeleton className={'h-96 w-96'} key={index} />
            ))
          : products.map((item) => <Card key={item.id} {...item} />)}
      </section>
    </>
  );
};
