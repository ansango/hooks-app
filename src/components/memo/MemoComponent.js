import { useCallback, useState } from "react";
import { MemoChild } from "./children/MemoChild";

export const MemoComponent = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback(
    (num) => {
      setValue((co) => co + num);
    },
    [setValue]
  );

  return (
    <>
      <h3>Memo Component</h3>
      <p> Total: {value} </p>

      <h3>Memo Children</h3>
      {numbers.map((n) => (
        <MemoChild key={n} number={n} increment={increment} />
      ))}
    </>
  );
};
