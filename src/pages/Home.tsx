import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';

export const Home = () => {
  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        <Tabs />
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
