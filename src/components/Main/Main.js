import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import spinner from "../../spinner.gif";

import Home from "../Home/Home";

const Skills = React.lazy(() => import("../Skills/Skills"));
const Certs = React.lazy(() => import("../Certs/Certs"));
const About = React.lazy(() => import("../About/About"));

export default function Main(props) {
  return (
    <div className={styles.main}>
      <Suspense
        fallback={
          <div>
            <img src={spinner} alt="Loading..." />
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certs" element={<Certs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}
