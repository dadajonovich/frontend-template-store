import { useEffect, useState } from 'react';

type PaginationProps = {
  count: number;
  onChange: (page: number) => unknown;
};

export const Pagination = ({ count, onChange }: PaginationProps) => {
  const [page, setPage] = useState<number>(0);
  useEffect(() => void onChange(page), [page]);
  return (
    <div className="join mt-8 flex justify-center">
      {[...new Array(count)].map((_, index) => (
        <input
          key={index}
          className="btn btn-square join-item"
          type="radio"
          name="options"
          aria-label={String(index + 1)}
          defaultChecked={page === index}
          onClick={() => setPage(index)}
        />
      ))}
    </div>
  );
};
