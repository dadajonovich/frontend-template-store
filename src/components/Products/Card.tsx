import { ProductDto } from '../../types/product';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(price);
};

// type CardProps = Omit<ProductDto, 'CategoryId'>;

export const Card = ({ title, description, imageUrl, price }: ProductDto) => {
  return (
    <div className="card w-96">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="aspect-square object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions items-center justify-end">
            <p className="text-2xl font-bold	">от {formatPrice(price)}</p>
            <button className="btn btn-primary">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
