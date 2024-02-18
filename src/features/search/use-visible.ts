import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setVisible } from './search-slice';

export const useSearchVisible = (isVisible: boolean) => {
  const dispatch = useAppDispatch();

  useEffect(() => void dispatch(setVisible(isVisible)), []);
};
