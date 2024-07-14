import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Grommet } from "grommet";
import AppGrid from "./features/components/ui/appGrid/AppGrid";
import { BrowserRouter } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";

function App() {
  return (
    <Grommet
      full
      theme={hpe}
      style={{
        height: "100vh",
        overflow: "hidden",
        width: "100%",
        position: "fixed",
      }}
    >
      <BrowserRouter>
        <AppGrid />
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
