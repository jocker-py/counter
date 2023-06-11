import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import {Counter} from "./components/Counter";
import {store} from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}


export default App;


