import { useState } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Products } from '../components/Products/Products';
import { Sort } from '../components/Sort/Sort';
import { QueryProducts } from '../types';

export const Home = () => {
  const [query, setQuery] = useState<QueryProducts>({});

  return (
    <>
      <section className="mt-6 flex items-center justify-between">
        <Categories
          onChange={(id) => setQuery((state) => ({ ...state, categoryId: id }))}
        />
        <Sort
          onChange={(id) => setQuery((state) => ({ ...state, sortId: id }))}
        />
      </section>
      <Products query={query} />
    </>
  );
};
