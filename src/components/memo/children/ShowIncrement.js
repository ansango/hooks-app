import React from "react";
import { log } from "../../../helpers/log";

export const ShowIncrement = React.memo(({ increment }) => {
  log("ShowIncrement", "Render");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});
