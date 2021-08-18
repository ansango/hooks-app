import { useState } from "react";
import { MultipleCustomHooks } from "../custom/MultipleCustomHooks";
import "./RealExampleRef.css";
export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>RealExampleRef</h1>
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
    </div>
  );
};
