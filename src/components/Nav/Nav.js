import React, { useState } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [navShown, setNavShown] = useState(false);
  const [title, setTitle] = useState(document.title);
  document.title = title;
  const toggleNavHandler = () => {
    setNavShown((prev) => !prev);
  };
  const closeNav = () => setNavShown(false);
  const linkedInHandler = () =>
    window.open("https://www.linkedin.com/in/abdelmadjid-boualami/", "_blank");
  let activeStyle = {
    // borderLeft: "2px solid whitesmoke",
    boxShadow: "-5px 0px 0px 0px #c770f0",
    paddingLeft: "0.5rem",
    // width: "150% ",
    marginLeft: "-0.5rem",
    // paddingInline: "5rem",
  };
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
        <li
          className={styles.navButton}
          onClick={() => {
            closeNav();
            setTitle("Majid's portfolio");
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            title="home"
          >
            <ion-icon name="home-outline" />{" "}
            <span className={styles.span}> Home</span>
          </NavLink>
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            closeNav();
            setTitle("Skills");
          }}
        >
          <NavLink
            to="skills"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            title="Skills"
          >
            <ion-icon name="code-outline" />{" "}
            <span className={styles.span}>Skills</span>
          </NavLink>
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            closeNav();
            setTitle("Certifications");
          }}
        >
          <NavLink
            to="certs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            title="Certs"
          >
            <ion-icon name="document-outline" />{" "}
            <span className={styles.span}>Certs</span>
          </NavLink>
        </li>
        <li
          className={styles.navButton}
          onClick={() => {
            closeNav();
            setTitle("About me");
          }}
        >
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            title="About"
          >
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
