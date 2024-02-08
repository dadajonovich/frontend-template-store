type TabsProps = {
  items: string[];
};

export const Tabs = ({ items }: TabsProps) => {
  return (
    <div role="tablist" className="tabs-boxed tabs w-fit">
      {items.map((item, index) => (
        <a key={index} role="tab" className="tab">
          {item}
        </a>
      ))}
    </div>
  );
};
