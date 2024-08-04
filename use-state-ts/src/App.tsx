import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter with TypeScript</h1>
        <Counter />
      </header>
    </div>
  );
};

export default App;
