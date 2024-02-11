export const Select = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Сортировать по...
      </option>
      <option>цене (ASC)</option>
      <option>цене (DESC)</option>
      <option>алфавиту (ASC)</option>
      <option>алфавиту (DESC)</option>
    </select>
  );
};
