import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./components/state/CounterApp";

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById("root")
);
