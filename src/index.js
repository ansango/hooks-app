import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./components/state/CounterApp";
//import { CounterWithCustomHook } from "./components/state/CounterWithCustomHook";
//import { SimpleForm } from "./components/effect/SimpleForm";
import { FormWithCustomHook } from "./components/effect/FormWithCustomHook";

ReactDOM.render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
  document.getElementById("root")
);
