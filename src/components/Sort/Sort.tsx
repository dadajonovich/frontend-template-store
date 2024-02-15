import { useSort } from '../../features/control/use-sort';
import { Select } from './Select';

export const Sort = () => {
  const [sortNames, handleChangeSort] = useSort();

  return (
    <Select
      onChange={handleChangeSort}
      items={sortNames}
    />
  );
};
