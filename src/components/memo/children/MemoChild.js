import React from "react";
import { log } from "../../../helpers/log";

export const MemoChild = React.memo(({ number, increment }) => {
  log("MemoChild", "Render");

  return (
    <button className="btn btn-primary me-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
