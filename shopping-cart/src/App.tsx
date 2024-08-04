import React from 'react';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart with useReducer</h1>
        <ShoppingCart />
      </header>
    </div>
  );
};

export default App;
