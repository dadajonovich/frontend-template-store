import { useSelector } from 'react-redux';
import { useSearchVisible } from '../features/search/use-visible';
import { formatPrice } from '../utils/formatPrice';
import { AiOutlineDelete } from 'react-icons/ai';
import { cartTiers, cartSum } from '../features/cart/cart-selectors';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const tiers = useSelector(cartTiers);
  const sum = useSelector(cartSum);

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
            {tiers.map((item) => (
              <CartItem {...item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="stat mt-8">
        <div className="stat-title">Order sum</div>
        <div className="stat-value">{formatPrice(sum)}</div>
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
