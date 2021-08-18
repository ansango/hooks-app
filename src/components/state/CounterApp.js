import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 0,
    counter2: 0,
  });

  const { counter1, counter2 } = state;
  return (
    <>
      <h3>Counter1 {counter1}</h3>
      <h3>Counter2 {counter2}</h3>
      <button
        className="btn btn-primary mx-1"
        onClick={() => setState({ ...state, counter1: counter1 + 1 })}
      >
        Counter1 +1
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => setState({ ...state, counter2: counter2 + 1 })}
      >
        Counter2 +1
      </button>
    </>
  );
};
