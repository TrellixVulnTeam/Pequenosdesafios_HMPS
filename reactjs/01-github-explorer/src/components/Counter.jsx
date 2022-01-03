import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    function incrementing(){
        setCounter(counter + 1)
    }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={incrementing}>Increment</button>
    </div>
  );
}
