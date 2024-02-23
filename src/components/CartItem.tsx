import { useAppDispatch } from '../store';
import { CartTier } from '../types';
import { addProduct, removeOne } from '../features/cart/cart-slice';
import { formatPrice } from '../utils/formatPrice';

export const CartItem = (props: CartTier) => {
  const dispatch = useAppDispatch();
  const { count, product } = props;
  const { imageUrl, title, price, id, description } = product;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-12">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{description}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => dispatch(removeOne(product))}
            className="btn btn-circle"
          >
            -
          </button>
          <p className="join-item ">{count}</p>
          <button
            onClick={() => dispatch(addProduct(product))}
            className="btn btn-circle"
          >
            +
          </button>
        </div>
      </td>
      <td>
        <div className="font-bold">{formatPrice(price * count)}</div>
      </td>
    </tr>
  );
};
