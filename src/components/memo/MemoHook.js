import { useMemo, useState } from "react";
import { heavyProcess } from "../../helpers/heavyProcess";
import { useCounter } from "../../hooks/useCounterCopy";

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <>
      <h3>Counter: {counter}</h3>
      <p>{memoHeavyProcess}</p>
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
