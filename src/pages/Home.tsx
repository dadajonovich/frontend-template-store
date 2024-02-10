import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';
import { loadProducts, loadСategories } from '../features/data/data-slice';
import { useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { selectData } from '../features/data/data-selectors';
import { useEffect } from 'react';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { products, categories } = useSelector(selectData);

  useEffect(() => {
    dispatch(loadСategories());
    dispatch(loadProducts());
  }, [dispatch]);

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
