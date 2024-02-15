import { useCallback } from 'react';
import { useAppDispatch } from '../../store';
import { SortId } from '../../types';
import { setSortId } from './control-slice';

const sortItems = {
  priceAsc: 'цене (ASC)',
  priceDesc: 'цене (DESC)',
  abcAsc: 'алфавиту (ASC)',
  abcDesc: 'алфавиту (DESC)',
} satisfies Record<SortId, string>;

export const useSort = () => {
  const dispatch = useAppDispatch();
  const handleChangeSort = useCallback(
    (index: number) => {
      if (!sortItems) return;
      dispatch(setSortId(Object.keys(sortItems)[index] as SortId));
    },
    [sortItems],
  );

  const sortNames = ['Сортировать по...', ...Object.values(sortItems)];

  return [sortNames, handleChangeSort] as const;
};
