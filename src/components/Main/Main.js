import React from "react";
import styles from "./Main.module.css";

import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Certs from "../Certs/Certs";
import About from "../About/About";

export default function Main(props) {
  return (
    <div className={styles.main}>
      {props.shown === "Home" && <Home />}
      {props.shown === "Skills" && <Skills />}
      {props.shown === "Certs" && <Certs />}
      {props.shown === "About" && <About />}
    </div>
  );
}
