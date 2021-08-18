import { useState } from "react";
import { useCounter } from "../../hooks/useCounterCopy";
import { Small } from "./Small";

export const Memorize = () => {
  const { state: counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h3>
        Counter: <Small value={counter} />
      </h3>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary mx-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};