import { useState, useEffect } from "react";

export default function Counter(props) {
  const label = props.counterLabel;

  const [currentCount, setCurrentCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("Today");

  const increment = () => {
    setCurrentCount(currentCount + 1);
  };

  const decrement = () => {
    setCurrentCount(currentCount - 1);
  };

  const updateTime = () => {
    setLastUpdated(new Date().toISOString());
  };

  const printValue = (value) => {
    console.log(value);
  };

  // updateTime runs every time current count changes
  useEffect(updateTime, [currentCount]);

  return (
    <div class="counter">
      <p>
        {label}: {currentCount}
      </p>
      <p>
        Last Updated at <em>{lastUpdated}</em>
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    {/* if for some reason you need a parameter in the function */}
      <button
        onClick={() => {
          printValue(currentCount);
        }}
      >
        Print Current Count
      </button>
    </div>
  );
}
