import { useState } from 'react';

type TabsProps = {
  items: string[];
};

export const Tabs = ({ items }: TabsProps) => {
  const [categoryId, setCategoryId] = useState<number>(0);

  return (
    <div role="tablist" className="tabs-boxed tabs w-fit">
      {items.map((item, index) => (
        <a
          key={index}
          role="tab"
          className={categoryId === index ? 'tab tab-active' : 'tab'}
          onClick={() => setCategoryId(index)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
