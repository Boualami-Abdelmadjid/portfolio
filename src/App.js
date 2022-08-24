import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Preloader from "./components/preloader/Preloader";

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
      {!loaded && <Preloader />}
      <Nav onStateChange={stateHandler} />
      <Main shown={shown} />
    </div>
  );
}

export default App;
