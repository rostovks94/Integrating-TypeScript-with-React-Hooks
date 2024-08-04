// src/components/ShoppingCart.tsx
import React, { useReducer } from 'react';
import { shoppingCartReducer, initialState } from '../reducers/shoppingCartReducer';
import { ShoppingCartItem } from '../types';

const ShoppingCart: React.FC = () => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  const addItemToCart = (item: ShoppingCartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const calculateTotalCost = () => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={calculateTotalCost}>Calculate Total</button>
      <h3>Total Cost: ${state.total}</h3>
      <button
        onClick={() =>
          addItemToCart({ id: 1, name: 'Item 1', price: 10, quantity: 1 })
        }
      >
        Add Item 1
      </button>
      <button
        onClick={() =>
          addItemToCart({ id: 2, name: 'Item 2', price: 20, quantity: 1 })
        }
      >
        Add Item 2
      </button>
    </div>
  );
};

export default ShoppingCart;
