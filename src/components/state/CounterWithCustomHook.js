import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h3>State: {counter}</h3>
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
