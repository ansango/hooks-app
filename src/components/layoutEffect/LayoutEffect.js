import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounterCopy";
import { useFetch } from "../../hooks/useFetch";

export const LayoutEffect = () => {
  const { state: counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data } = useFetch(url);
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    const width = `${pTag.current.getBoundingClientRect().width} px`;
    const height = `${pTag.current.getBoundingClientRect().height} px`;
    setBoxSize({ width: width, height: height });
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote d-flex">
        <p className="mb-3" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <p>Blockquote box dimensions:</p>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </>
  );
};
