import { useEffect } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Products } from '../components/Products/Products';
import { Sort } from '../components/Sort/Sort';

export const Home = () => {
  useEffect(() => {});
  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        <Categories />
        <Sort />
      </section>
      <Products />
    </>
  );
};
