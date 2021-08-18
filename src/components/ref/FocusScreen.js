import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <input ref={inputRef} className="form-control" placeholder="Your name" />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
