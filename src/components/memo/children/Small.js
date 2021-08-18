import React from "react";
import { log } from "../../../helpers/log";

export const Small = React.memo(({ value }) => {
  log("Small", "Render");
  return <small>{value}</small>;
});
