import { useEffect, useState } from 'react';

type TabsProps = {
  onChange: (index: number) => unknown;
  items: string[];
};

export const Tabs = ({ onChange, items }: TabsProps) => {
  const [currentIndex, setIndex] = useState<number>(0);

  useEffect(() => void onChange(currentIndex), [currentIndex]);

  return (
    <div role="tablist" className="tabs-boxed tabs w-fit">
      {items.map((item, index) => (
        <a
          key={index}
          role="tab"
          className={currentIndex === index ? 'tab tab-active' : 'tab'}
          onClick={() => setIndex(index)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
