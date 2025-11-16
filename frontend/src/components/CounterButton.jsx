import React, { useState } from "react";

const CounterButton = ({ initialCount = 0, label = "Click Me" }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>
        Current Count:{" "}
        <span data-testid="current-count" className="text-indigo-600 font-bold">
          {count}
        </span>
      </p>
      <button data-testid="counter-button" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default CounterButton;
