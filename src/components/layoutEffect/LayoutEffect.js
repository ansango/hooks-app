import { useCounter } from "../../hooks/useCounterCopy";
import { useFetch } from "../../hooks/useFetch";

export const LayoutEffect = () => {
  const { state: counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data } = useFetch(url);
  const { author, quote } = !!data && data[0];
  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="mb-3">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </>
  );
};
