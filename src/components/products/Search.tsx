import { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <div className='search'>
      <a className='search__btn' href='#'>
        <AiOutlineSearch />
      </a>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className='search__input'
        type='text'
        name=''
        placeholder='Search...'
      />
      {searchValue && (
        <AiOutlineClose
          onClick={() => setSearchValue('')}
          className='search__clear'
        />
      )}
    </div>
  );
}

export default Search;
