import React, { useState } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const [navShown, setNavShown] = useState(false);
  const toggleNavHandler = () => {
    setNavShown((prev) => !prev);
  };
  const closeNav = () => setNavShown(false);
  const linkedInHandler = () =>
    window.open("https://www.linkedin.com/in/abdelmadjid-boualami/", "_blank");
  return (
    <nav
      // className={navShown ? "" : styles.navHidden}
      style={{ width: `${!navShown ? "3rem" : "fit-content"}` }}
    >
      <ul>
        <li
          className={`${styles.navButton} ${styles.navToggle}`}
          onClick={toggleNavHandler}
        >
          <ion-icon id={styles.menu} name="menu-outline" />
        </li>
        <li className={styles.navButton} onClick={closeNav}>
          <NavLink to="/">
            <ion-icon name="home-outline" />{" "}
            <span className={styles.span}> Home</span>
          </NavLink>
        </li>
        <li className={styles.navButton} onClick={closeNav}>
          <NavLink to="skills">
            <ion-icon name="code-outline" />{" "}
            <span className={styles.span}>Skills</span>
          </NavLink>
        </li>
        <li className={styles.navButton} onClick={closeNav}>
          <NavLink to="certs">
            <ion-icon name="document-outline" />{" "}
            <span className={styles.span}>Certs</span>
          </NavLink>
        </li>
        <li className={styles.navButton} onClick={closeNav}>
          <NavLink to="about">
            <ion-icon name="information-circle-outline" />{" "}
            <span className={styles.span}>About</span>
          </NavLink>
        </li>
        <li
          className={styles.navButton}
          id={styles.linkedIn}
          onClick={linkedInHandler}
        >
          <ion-icon name="logo-linkedin" />

          <span>LinkedIn</span>
        </li>
      </ul>
    </nav>
  );
}
