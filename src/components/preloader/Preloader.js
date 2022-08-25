import React from "react";
import Nav from "../Nav/Nav";
import styles from "./Preloader.module.css";
import gif from "./loading.svg";

export default function Preloader() {
  return (
    <div className={styles["preloader--container"]}>
      <Nav />
      <div className={styles["preloader"]}>
        <img src={gif} alt="preloader" />
      </div>
    </div>
  );
}
