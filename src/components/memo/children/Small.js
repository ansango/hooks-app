import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("render");
  return <small>{value}</small>;
});
