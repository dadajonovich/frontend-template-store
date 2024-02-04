import Products from '../components/products/Products';
import Card from '../components/card/Card';
import SkeletonCard from '../components/card/SkeletonCard';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';

function Home() {
  const { loading, data, error } = useFetch(
    'https://640df143b07afc3b0dba8dc9.mockapi.io/articles'
  );

  return (
    <section className='catalog'>
      <Products />
      <article className='card-block'>
        {loading
          ? [...new Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : data.map((item, index) => <Card key={item.id} {...item} />)}
      </article>
    </section>
  );
}

export default Home;
