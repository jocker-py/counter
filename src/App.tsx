import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter minValue={0} maxValue={5}/>
      <Counter minValue={0} maxValue={10}/>
    </div>
  );
}


export default App;


