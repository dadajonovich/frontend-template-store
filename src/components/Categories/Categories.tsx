import { useGetCategoriesQuery } from '../../features/data/data-api';
import { Skeleton } from '../Skeleton';
import { Tabs } from './Tabs';

type CategoriesProps = {
  onChange: (id: number) => unknown;
};

export const Categories = ({ onChange }: CategoriesProps) => {
  const { data: categories } = useGetCategoriesQuery();

  const categoryNames = categories
    ? ['Все', ...categories.map((item) => item.title)]
    : null;

  return categoryNames ? (
    <Tabs
      onChange={(index: number) => {
        if (!categories) return;
        const category = categories[index - 1];
        onChange(category?.id);
      }}
      items={categoryNames}
    />
  ) : (
    <Skeleton width={300} height={38} />
  );
};
