import React, { useState } from "react";
import styles from "./Main.module.css";

import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Certs from "../Certs/Certs";
export default function Main() {
  const [shown, setShown] = useState("Certs");
  return (
    <div className={styles.main}>
      {shown === "Home" && <Home />}
      {shown === "Skills" && <Skills />}
      {shown === "Certs" && <Certs />}
    </div>
  );
}
