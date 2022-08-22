import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";

import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Certs from "../Certs/Certs";
import About from "../About/About";

export default function Main(props) {
  return (
    <div className={styles.main}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="certs" element={<Certs />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
