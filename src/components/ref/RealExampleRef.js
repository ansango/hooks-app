import { useState } from "react";
import { MultipleCustomHooks } from "../custom/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h2>RealExampleRef</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show/Hide
        </button>
      </div>

      <hr />
      {show && <MultipleCustomHooks />}
    </>
  );
};
