import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Define the state with useState hook, initializing the counter to 0
  const [count, setCount] = useState<number>(0);

  // Handlers for the buttons
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
