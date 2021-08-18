import { useState } from "react";
import { MultipleCustomHooks } from "../custom/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary mb-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>

      {show && <MultipleCustomHooks />}
    </>
  );
};
