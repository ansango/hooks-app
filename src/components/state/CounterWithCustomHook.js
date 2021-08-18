import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h2>Counter with Custom Hook</h2>
      <hr />
      <h3>State: {state}</h3>
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
