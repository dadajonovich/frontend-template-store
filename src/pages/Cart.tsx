import { useSearchVisible } from '../features/search/use-visible';

export const Cart = () => {
  useSearchVisible(false);
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Item</th>
            <th></th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              <div className="flex items-center justify-center gap-2">
                <button className="btn btn-circle">-</button>
                <p className="join-item ">1</p>
                <button className="btn btn-circle">+</button>
              </div>
            </td>
            <td>
              <div className="font-bold">228</div>
            </td>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>228</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
