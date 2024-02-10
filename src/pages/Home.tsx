import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Tabs } from '../components/Tabs';
import { loadProducts } from '../features/products/product-slice';
import { useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../features/products/product-selectors';
import { useEffect } from 'react';
import { selectCategories } from '../features/controls/controls-selectors';
import { loadСategories } from '../features/controls/controls-slice';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useSelector(selectAllProducts);
  const { categories } = useSelector(selectCategories);

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
