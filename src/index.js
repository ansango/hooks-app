import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./components/state/CounterApp";
//import { CounterWithCustomHook } from "./components/state/CounterWithCustomHook";
import { SimpleForm } from "./components/effect/SimpleForm";

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById("root")
);
