import { RootState } from '../../store';
import { CartTier } from '../../types';

export const cartCount = (state: RootState) => state.cart.products.length;
export const cartProducts = (state: RootState) => state.cart.products;
export const cartTiers = (state: RootState) => {
  const items = state.cart.products;
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
export const cartSum = (state: RootState) => {
  const items = state.cart.products;
  return items.reduce((acc, item) => (acc += item.price), 0);
};
