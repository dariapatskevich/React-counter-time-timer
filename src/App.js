import React from "react";

import "./App.css";

import { Counter } from "./components/Counter";
import { Time } from "./components/Time/Time";
import { Timer } from "./components/Timer";



function App() {
  return (
    <div className="App">
      <Counter/>
      <Time/>
      <Timer/>
    </div>
  );
}

export default App;