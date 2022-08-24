import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className={styles["preloader--container"]}>
      <div className={styles["preloader"]}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
}
