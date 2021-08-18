import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./components/state/CounterApp";
//import { CounterWithCustomHook } from "./components/state/CounterWithCustomHook";
//import { SimpleForm } from "./components/effect/SimpleForm";
//import { FormWithCustomHook } from "./components/effect/FormWithCustomHook";
//import { MultipleCustomHooks } from "./components/custom/MultipleCustomHooks";
//import { FocusScreen } from "./components/ref/FocusScreen";
import { RealExampleRef } from "./components/ref/RealExampleRef";

ReactDOM.render(
  <React.StrictMode>
    <RealExampleRef />
  </React.StrictMode>,
  document.getElementById("root")
);
