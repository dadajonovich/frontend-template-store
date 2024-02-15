import { useCallback } from 'react';
import { useAppDispatch } from '../../store';
import { useGetCategoriesQuery } from '../data/data-api';
import { setCategoryId } from './control-slice';

export const useCategory = () => {
  const dispatch = useAppDispatch();
  const { data: categories } = useGetCategoriesQuery();

  const handleChangeCategory = useCallback(
    (index: number) => {
      if (!categories) return;
      const category = categories[index - 1];
      dispatch(setCategoryId(category?.id));
    },
    [categories],
  );

  const categoryNames = categories
    ? ['Все', ...categories.map((item) => item.title)]
    : null;

  return [categoryNames, handleChangeCategory] as const;
};
