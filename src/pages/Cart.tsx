import { useSelector } from 'react-redux';
import { useSearchVisible } from '../features/search/use-visible';
// import { AiOutlineDelete } from 'react-icons/ai';
import { cartTiers, cartSum } from '../features/cart/cart-selectors';
import { CartItem } from '../components/CartItem';
import { Stat } from '../components/Stat';

export const Cart = () => {
  const tiers = useSelector(cartTiers);
  const sum = useSelector(cartSum);

  useSearchVisible(false);
  return (
    <section className="text-right">
      {sum !== 0 && (
        <div className="mt-8 overflow-x-auto">
          <table className="table ">
            <thead>
              <tr>
                <th>Items</th>
                <th></th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((item) => (
                <CartItem {...item} />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Stat sum={sum} />
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
