import { useState } from "react";
import "./CounterApp.css";
export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 0,
    counter2: 0,
  });

  const { counter1, counter2 } = state;
  return (
    <>
      <h2>Counter1 {counter1}</h2>
      <h2>Counter2 {counter2}</h2>
      <hr />
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
