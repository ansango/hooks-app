import React from "react";

export const MemoChild = React.memo(({ number, increment }) => {
  console.log("render");

  return (
    <button className="btn btn-primary me-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
