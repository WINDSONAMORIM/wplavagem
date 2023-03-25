import React from "react";
import { HeaderAppBar } from "./components/appBar";
import { FAB } from "./components/fab";
import { Slider } from "./components/slider";

function App() {
  return (
    <div className="App">
      <HeaderAppBar />
      <Slider />
      <FAB />
    </div>
  );
}

export default App;
