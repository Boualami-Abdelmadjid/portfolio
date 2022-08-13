import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
  const [shown, setShown] = useState("Home");
  const stateHandler = (state) => {
    setShown(state);
  };
  return (
    <div className="App">
      <Header />
      <Nav onStateChange={stateHandler} />
      <Main shown={shown} />
    </div>
  );
}

export default App;
