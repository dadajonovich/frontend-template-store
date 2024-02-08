import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';
import useFetch from '../hooks/use-fetch';
import { CategoryDto } from '../types';

export const Home = () => {
  const categories = useFetch<CategoryDto[]>(
    'http://localhost:3000/api/categories',
  );

  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        <Tabs items={(categories.data ?? []).map((item) => item.title)} />
        <Select />
      </section>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};
