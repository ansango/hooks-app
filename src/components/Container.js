import React from "react";
import "./Container.css";
export const Container = ({ title = "", children }) => {
  return (
    <div className="base-container p-5">
      <h2>{title}</h2>
      {title !== "" && <hr />}
      {children}
    </div>
  );
};
