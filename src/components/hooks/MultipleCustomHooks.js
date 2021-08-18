import React from "react";
import { useCounter } from "../../hooks/useCounterCopy";
import { useFetch } from "../../hooks/useFetch";
import "./MultipleCustomHooks.css";

export const MultipleCustomHooks = () => {
  const { state: counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data, loading } = useFetch(url);
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Multiple Custom Hooks</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};
