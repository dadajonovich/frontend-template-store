const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(price);
};

function Card({ imageUrl, title, price }) {
  return (
    <article className='card__item'>
      <figure>
        <img alt='card-img' src={imageUrl}></img>
      </figure>
      <div className='card__body'>
        <h2 className='card__title'>{title}</h2>
        <div className='card__bottom'>
          <p className='card__price'>{formatPrice(price)}</p>
          <button className='button'>Add to cart</button>
        </div>
      </div>
    </article>
  );
}

export default Card;
