import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./children/ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((co) => co + num);
    },
    [setCounter]
  );

  //useEffect(() => {}, [increment]);

  return (
    <>
      <h3>Counter :{counter}</h3>
      <ShowIncrement increment={increment} />
    </>
  );
};
