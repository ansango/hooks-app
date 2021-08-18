import React from "react";

export const Container = ({ title = "", children }) => {
  return (
    <div className="p-5">
      <h2>{title}</h2>
      <hr />
      {children}
    </div>
  );
};
