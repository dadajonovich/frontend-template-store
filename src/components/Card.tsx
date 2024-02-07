const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(price);
};

export const Card = () => {
  return (
    <div className="skeleton w-96 bg-primary">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <div className="card-actions items-center justify-end">
            <p className="text-2xl font-bold	">от {formatPrice(666)}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
