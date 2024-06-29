import { formatPrice } from '../utils/formatPrice';

type StatProps = {
  sum: number;
  modal?: string;
};

export const Stat = ({ sum }: StatProps) => {
  return (
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
  );
};
