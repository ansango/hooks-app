import { useCounter } from "../../hooks/useCounter";
import "./CounterWithCustomHook.css";
export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button className="btn btn-primary mx-1" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary mx-1" onClick={() => decrement(2)}>
        -1
      </button>
      <button className="btn btn-primary mx-1" onClick={reset}>
        Reset
      </button>
    </>
  );
};
