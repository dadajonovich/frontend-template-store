import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered input-secondary w-full max-w-xs"
      onChange={(event) => setSearchValue(event.target.value)}
      value={searchValue}
    />
    /*       {searchValue && (
        <AiOutlineClose
          onClick={() => setSearchValue('')}
          className="h-5 w-5"
        />
      )} */
  );
};
