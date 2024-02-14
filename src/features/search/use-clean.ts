import { useAppDispatch } from '../../store';
import { clearValue } from './search-slice';

export const useClean = () => {
  const dispatch = useAppDispatch();

  const cleanSearch = () => dispatch(clearValue());

  return cleanSearch;
};
