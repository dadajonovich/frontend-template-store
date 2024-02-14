import { ChangeEventHandler } from 'react';
import { useAppDispatch } from '../../store';
import { setValue } from './search-slice';
import { useSelector } from 'react-redux';
import { selectSearch } from './search-selectors';

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch = (e) => {
    dispatch(setValue(e.target.value));
  };

  return [search, handleSearch];
};
