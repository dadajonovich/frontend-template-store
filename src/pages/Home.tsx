import { useEffect, useState } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Products } from '../components/Products/Products';
import { Sort } from '../components/Sort/Sort';
import { QueryProducts } from '../types';
import { useSelector } from 'react-redux';
import { selectSearch } from '../features/search/search-selectors';
import { useSearchVisible } from '../features/search/use-visible';

export const Home = () => {
  const [query, setQuery] = useState<QueryProducts>({ limit: 6 });
  const searchValue = useSelector(selectSearch);
  useEffect(
    () => setQuery((state) => ({ ...state, search: searchValue })),
    [searchValue],
  );

  useSearchVisible(true);

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
