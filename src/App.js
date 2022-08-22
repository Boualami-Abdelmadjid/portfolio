import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import spinner from "./spinner.gif";

function App() {
  const [shown, setShown] = useState("Home");
  const [loaded, setLoaded] = useState(false);

  const loadDocument = () => {
    if (document.readyState === "complete") {
      setLoaded(true);
    }
  };
  useEffect(() => {
    document.addEventListener("readystatechange", loadDocument);
    return () => {
      document.removeEventListener("readystatechange", loadDocument);
    };
  }, []);
  const stateHandler = (state) => {
    document.title = state;
    setShown(state);
  };
  return (
    <div className="App">
      <div className={`preloader ${loaded ? "hidden" : ""}`}>
        <img src={spinner} alt="" />
      </div>
      <Nav onStateChange={stateHandler} />
      <Main shown={shown} />
    </div>
  );
}

export default App;
