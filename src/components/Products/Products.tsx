import { Skeleton } from '../Skeleton';
import { Card } from './Card';
import { ProductsDto } from '../../types';

type ProductsProps = {
  data: ProductsDto | undefined;
};

export const Products = ({ data }: ProductsProps) => {
  return (
    <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-16">
      {data?.products
        ? data.products.map((item) => <Card key={item.id} {...item} />)
        : [...new Array(4)].map((_, index) => (
            <Skeleton className={'h-96 w-96'} key={index} />
          ))}
    </section>
  );
};
