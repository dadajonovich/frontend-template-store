import { SortId } from '../../types';
import { Select } from './Select';

const sortItems = {
  priceAsc: 'цене (ASC)',
  priceDesc: 'цене (DESC)',
  abcAsc: 'алфавиту (ASC)',
  abcDesc: 'алфавиту (DESC)',
} satisfies Record<SortId, string>;

type SortProps = {
  onChange: (id: SortId) => unknown;
};

export const Sort = ({ onChange }: SortProps) => {
  const sortNames = ['Сортировать по...', ...Object.values(sortItems)];
  return (
    <Select
      onChange={(index: number) => {
        if (!sortItems) return;
        onChange(Object.keys(sortItems)[index] as SortId);
      }}
      items={sortNames}
    />
  );
};
