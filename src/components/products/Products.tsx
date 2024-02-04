import TemplateSelected from './TemplateSelected';
import Search from './Search';
import { AiOutlineAppstore } from 'react-icons/ai';
import useAccordion from '../../hooks/useAccordion';
import { useState } from 'react';

// const categories = ['All', 'Bottles', 'Tableware', 'Other'];
const categories = [{ name: 'All' }];
// const sortCategories = ['A-z', 'Popularity', 'Price'];
const sortCategories = [
  { name: 'A-z', property: 'title' },
  { name: 'Price', property: 'price' },
  { name: 'Popularity', property: 'popularity' },
];

function Products() {
  const [selectSwitch, setSelectSwitch] = useState(false);
  const [selectSwitchCategories, setSelectSwitchCategories] = useState(false);
  const [selectSwitchSort, setSelectSwitchSort] = useState(false);

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  const handleSetSelectSwitch = () => {
    setSelectSwitch((selectSwitch) => !selectSwitch);
    setSelectSwitchCategories(false);
    setSelectSwitchSort(false);
  };
  const [elementRef] = useAccordion(selectSwitch);
  return (
    <article className='products'>
      <div className='products__wrapper'>
        <span className='products__btn' onClick={handleSetSelectSwitch}>
          <AiOutlineAppstore />
          <p>Categories</p>
        </span>
        <Search />
      </div>
      <div ref={elementRef} className='products__accordion'>
        <TemplateSelected
          valueIndex={categoryId}
          onClick={setCategoryId}
          selectSwitch={selectSwitchCategories}
          setSelectSwitch={setSelectSwitchCategories}
          title={'Category selected: '}
          items={categories}
        />
        <TemplateSelected
          valueIndex={sortType}
          onClick={setSortType}
          selectSwitch={selectSwitchSort}
          setSelectSwitch={setSelectSwitchSort}
          title={'Sort by: '}
          items={sortCategories}
        />
      </div>
      <hr
        style={
          {
            // opacity: '80%',
          }
        }
      />
    </article>
  );
}

export default Products;
