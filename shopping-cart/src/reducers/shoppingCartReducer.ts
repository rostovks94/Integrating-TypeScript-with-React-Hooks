// src/reducers/shoppingCartReducer.ts
import { ShoppingCartItem } from '../types';

interface ShoppingCartState {
  items: ShoppingCartItem[];
  total: number;
}

type ShoppingCartAction =
  | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CALCULATE_TOTAL' };

const initialState: ShoppingCartState = {
  items: [],
  total: 0,
};

const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartAction
): ShoppingCartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CALCULATE_TOTAL':
      return {
        ...state,
        total: state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    default:
      return state;
  }
};

export { shoppingCartReducer, initialState };
export type { ShoppingCartState, ShoppingCartAction };
