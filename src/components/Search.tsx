import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSearch } from '../features/search/use-search';
import { useClean } from '../features/search/use-clean';

export const Search = () => {
  // const [searchValue, setSearchValue] = useState<string>('');
  const [search, handleSearch] = useSearch();
  const clean = useClean();
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-secondary w-full max-w-xs"
        onChange={handleSearch}
        value={search}
      />
      {search && (
        <AiOutlineClose
          onClick={clean}
          className="absolute right-4 top-[50%] h-5 w-5 translate-y-[-50%]"
        />
      )}
    </div>
  );
};
