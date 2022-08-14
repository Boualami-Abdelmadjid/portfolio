import React, { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav(props) {
  const [navShown, setNavShown] = useState(false);
  const toggleNavHandler = () => {
    setNavShown((prev) => !prev);
  };
  return (
    <nav className={navShown ? "" : styles.navHidden}>
      <ul>
        <li
          className={`${styles.navButton} ${styles.navToggle}`}
          onClick={toggleNavHandler}
        >
          <ion-icon id={styles.menu} name="menu-outline" size="large" />
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            setNavShown(false);
            props.onStateChange("Home");
          }}
        >
          {" "}
          <ion-icon name="home-outline" /> <span>Home</span>
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            props.onStateChange("Skills");
            setNavShown(false);
          }}
        >
          {" "}
          <ion-icon name="code-outline" /> <span>Skills</span>
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            props.onStateChange("Certs");
            setNavShown(false);
          }}
        >
          {" "}
          <ion-icon name="document-outline" /> <span>Certs</span>
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            props.onStateChange("About");
            setNavShown(false);
          }}
        >
          <ion-icon name="information-circle-outline" /> <span>About</span>
        </li>
        <li className={styles.navButton} id={styles.linkedIn}>
          <ion-icon name="logo-linkedin" /> <span>LinkedIn</span>
        </li>
      </ul>
    </nav>
  );
}
