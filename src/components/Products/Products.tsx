import { useSelector } from 'react-redux';
import { useLazyGetProductsQuery } from '../../features/data/data-api';
import { useEffect } from 'react';
import { Skeleton } from '../Skeleton';
import { selectQuery } from '../../features/control/control-selectors';
import { Card } from './Card';
import { Pagination } from './Pagination';

export const Products = () => {
  const [getProducts, { data: products }] = useLazyGetProductsQuery();
  const queryProducts = useSelector(selectQuery);

  useEffect(
    () => void getProducts(queryProducts),
    [getProducts, queryProducts],
  );

  return (
    <>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-16">
        {products
          ? products.map((item) => <Card key={item.id} {...item} />)
          : [...new Array(4)].map((_, index) => (
              <Skeleton className={'h-96 w-96'} key={index} />
            ))}
      </section>
      <Pagination />
    </>
  );
};
