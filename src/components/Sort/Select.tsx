type SelectProps = {
  onChange: (index: number) => unknown;
  items: string[];
  defaultValue?: number;
};

export const Select = ({ onChange, items, defaultValue = 0 }: SelectProps) => {
  return (
    <select
      onChange={(event) => onChange(Number(event.target.value))}
      defaultValue={defaultValue}
      className="select select-bordered w-full max-w-xs"
    >
      {items.map((option, index) => (
        <option disabled={index === defaultValue} key={index} value={index}>
          {option}
        </option>
      ))}
    </select>
  );
};
