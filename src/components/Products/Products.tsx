import { useGetProductsQuery } from '../../features/data/data-api';
import { Skeleton } from '../Skeleton';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { QueryProducts } from '../../types';

type ProductsProps = {
  query: QueryProducts;
};

export const Products = ({ query }: ProductsProps) => {
  const { data } = useGetProductsQuery(query);

  return (
    <>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-16">
        {data?.products
          ? data.products.map((item) => <Card key={item.id} {...item} />)
          : [...new Array(4)].map((_, index) => (
              <Skeleton className={'h-96 w-96'} key={index} />
            ))}
      </section>
      <Pagination count={(data?.totalCount || 0) / 6} />
    </>
  );
};
