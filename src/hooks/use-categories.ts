import { useGetCategoriesQuery } from '../features/data/data-api';

type CategoriesHook =
  | {
      onChange: (id: number) => unknown;
      items: string[];
    }
  | { items: null };

export const useCategories = (
  onChange: (id: number) => unknown,
): CategoriesHook => {
  const { data: categories } = useGetCategoriesQuery();
  const categoryNames = categories
    ? ['Все', ...categories.map((item) => item.title)]
    : null;

  const handleChange = (index: number) => {
    if (!categories) return;
    const category = categories[index - 1];
    onChange(category?.id);
  };
  return { onChange: handleChange, items: categoryNames };
};
