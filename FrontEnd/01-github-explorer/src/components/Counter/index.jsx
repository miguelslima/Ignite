import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment the number of counter
      </button>
      <button type="button" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
}
