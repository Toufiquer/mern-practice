import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => count > 0 && setCount(count - 1);
  return (
    <div>
      <h2>Only For Testing Purpose</h2>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
