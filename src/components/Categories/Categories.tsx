import { useCategory } from '../../features/control/use-category';
import { Skeleton } from '../Skeleton';
import { Tabs } from './Tabs';

export const Categories = () => {
  const [categoryNames, handleChangeCategory] = useCategory();

  return categoryNames ? (
    <Tabs onChange={handleChangeCategory} items={categoryNames} />
  ) : (
    <Skeleton width={300} height={38} />
  );
};
