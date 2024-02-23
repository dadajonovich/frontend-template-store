import { useSelector } from 'react-redux';
import { useSearchVisible } from '../features/search/use-visible';
import { formatPrice } from '../utils/formatPrice';
import { AiOutlineDelete } from 'react-icons/ai';
import { cartProducts } from '../features/cart/cart-selectors';
import { ProductDto } from '../types';
import { useMemo } from 'react';
import { addProduct, removeOne } from '../features/cart/cart-slice';
import { useAppDispatch } from '../store';

type CartTier = {
  count: number;
  product: ProductDto;
};

const toCartItems = (items: ProductDto[]): CartTier[] => {
  return items.reduce((acc, item) => {
    const currentTier = acc.find((tier) => tier.product.id === item.id);
    if (currentTier) {
      currentTier.count++;
    } else {
      acc.push({ count: 1, product: item });
    }
    return acc;
  }, [] as CartTier[]);
};

export const Cart = () => {
  const items = useSelector(cartProducts);
  const dispatch = useAppDispatch();
  const cartItems = useMemo(() => toCartItems(items), [items]);

  useSearchVisible(false);
  return (
    <section className="text-right">
      <div className="mt-8 overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Item</th>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItems.map(
              ({
                count,
                product: { imageUrl, title, price, id, description },
              }) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-12">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
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
                      <button className="btn btn-circle">-</button>
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
                    <div className="font-bold">{price * count}</div>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <div className="stat mt-8">
        <div className="stat-title">Order sum</div>
        <div className="stat-value">{formatPrice(228)}</div>
        <div className="stat-actions">
          <button
            onClick={() => document.getElementById('my_modal_1')!.showModal()}
            className="btn btn-success btn-sm"
          >
            Place an order
          </button>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};
