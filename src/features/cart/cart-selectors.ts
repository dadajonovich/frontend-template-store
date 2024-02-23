import { RootState } from '../../store';

export const cartCount = (state: RootState) => state.cart.products.length;
export const cartProducts = (state: RootState) => state.cart.products;
