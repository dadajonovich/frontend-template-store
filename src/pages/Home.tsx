import { useCallback, useEffect, useState } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Products } from '../components/Products/Products';
import { Sort } from '../components/Sort/Sort';
import { QueryProducts } from '../types';
import { useSelector } from 'react-redux';
import { selectSearch } from '../features/search/search-selectors';
import { useSearchVisible } from '../features/search/use-visible';
import { useGetProductsQuery } from '../features/data/data-api';
import { Pagination } from '../components/Products/Pagination';
import { useDebounce } from '../hooks/use-debounce';

export const Home = () => {
  const limit = 6;
  const [query, setQuery] = useState<QueryProducts>({ limit });
  const { data } = useGetProductsQuery(query);
  const searchValue = useSelector(selectSearch);
  const debounced = useCallback(
    useDebounce((search: string) => {
      setQuery((state) => ({ ...state, search: search }));
    }, 1000),
    [],
  );

  useEffect(() => {
    debounced(searchValue);
  }, [searchValue]);

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
      <Products data={data} />
      <Pagination
        onChange={(page) => setQuery((state) => ({ ...state, page }))}
        count={Math.ceil((data?.totalCount || 0) / limit)}
      />
    </>
  );
};
