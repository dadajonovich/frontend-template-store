import { useCategories } from '../../hooks/use-categories';
import { Skeleton } from '../Skeleton';
import { Tabs } from './Tabs';

type CategoriesProps = {
  onChange: (id: number) => unknown;
};

export const Categories = ({ onChange }: CategoriesProps) => {
  const categories = useCategories(onChange);

  return categories.items ? (
    <Tabs {...categories} />
  ) : (
    <Skeleton width={300} height={38} />
  );
};
