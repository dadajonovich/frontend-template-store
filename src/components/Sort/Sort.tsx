import { useSort } from '../../hooks/use-sort';
import { SortId } from '../../types';
import { Select } from './Select';

type SortProps = {
  onChange: (id: SortId) => unknown;
};

export const Sort = ({ onChange }: SortProps) => {
  const sort = useSort(onChange);

  return <Select {...sort} />;
};
