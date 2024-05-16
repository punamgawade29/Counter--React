import React, { useState } from 'react';
import './css/Counter.css';

const Counter = () => {
  // State variable for the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-container">
        <button className="counter-button" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="counter-button" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
