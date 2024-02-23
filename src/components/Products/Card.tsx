import { addProduct } from '../../features/cart/cart-slice';
import { useAppDispatch } from '../../store';
import { ProductDto } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';

// type CardProps = Omit<ProductDto, 'CategoryId'>;

export const Card = (props: ProductDto) => {
  const { title, description, imageUrl, price } = props;
  const dispatch = useAppDispatch();

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
            <button
              onClick={() => {
                dispatch(addProduct(props));
              }}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
