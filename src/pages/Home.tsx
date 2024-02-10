import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';

import {
  useGetProductsQuery,
  useGetCategoriesQuery,
} from '../features/data/data-api';

export const Home = () => {
  const { data: products, isLoading: isLoadingProducts } =
    useGetProductsQuery();
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  if (isLoadingProducts && isLoadingCategories) return <h1>Loading...</h1>;

  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        <Tabs items={categories.map((item) => item.title)} />
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
