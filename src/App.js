import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Tally Counter</h1>
        <div className="counter-display">{count}</div>
        <div className="buttons">
          <button onClick={handleIncrement} className="increment-button">+</button>
          <button onClick={handleDecrement} className="decrement-button">-</button>
        </div>
        <footer className="App-footer">
          <p> Nakshatra Hiray </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
