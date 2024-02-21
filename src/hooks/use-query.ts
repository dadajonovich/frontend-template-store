export const useQueryQuery = (totalCount: number) => {
  const { data } = useGetProductsQuery(query);
  const count = Math.ceil((totalCount || 0) / 6);
};
