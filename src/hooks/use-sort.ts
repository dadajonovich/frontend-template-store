import { SortId } from '../types';

const sortItems = {
  priceAsc: 'цене (ASC)',
  priceDesc: 'цене (DESC)',
  abcAsc: 'алфавиту (ASC)',
  abcDesc: 'алфавиту (DESC)',
} satisfies Record<SortId, string>;

export const useSort = (onChange: (id: SortId) => unknown) => {
  const sortNames = ['Сортировать по...', ...Object.values(sortItems)];

  const handleChange = (index: number) => {
    if (!sortItems) return;
    onChange(Object.keys(sortItems)[index] as SortId);
  };
  return { onChange: handleChange, items: sortNames } as const;
};
