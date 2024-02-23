import { AiOutlineClose } from 'react-icons/ai';
import { useSearch } from '../features/search/use-search';
import { useSelector } from 'react-redux';
import { selectSearchVisible } from '../features/search/search-selectors';

export const Search = () => {
  const isVisible = useSelector(selectSearchVisible);
  const [search, handleSearch, handleCleanSearch] = useSearch();

  return (
    <div className={isVisible ? 'relative' : 'hidden'}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-secondary w-full max-w-xs"
        onChange={handleSearch}
        value={search}
      />
      {search && (
        <AiOutlineClose
          onClick={handleCleanSearch}
          className="absolute right-4 top-[50%] h-5 w-5 translate-y-[-50%]"
        />
      )}
    </div>
  );
};
