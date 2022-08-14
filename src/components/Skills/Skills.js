import React from "react";
import styles from "./Skills.module.css";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import reactLogo from "./img/react.png";
import python from "./img/python.png";
import django from "./img/django.png";

import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.skills}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
      >
        <div className={`${styles.frontend} + ${styles.container}`}>
          <p>Frontend</p>
          <div className={styles.skill}>
            <p>HTML</p>
            <img id="html" src={html} alt="html" />
          </div>
          <div className={styles.skill}>
            <p>CSS</p>
            <img id="css" src={css} alt="css" />
          </div>

          <div className={styles.skill}>
            <p>JS</p>
            <img id="js" src={js} alt="javascript" />
          </div>

          <div className={styles.skill}>
            <p>React.js</p>
            <img src={reactLogo} alt="react" />
          </div>
        </div>
        <div className={`${styles.backend} + ${styles.container}`}>
          <p>Backend</p>
          <div className={styles.skill}>
            <p>Python</p>
            <img src={python} alt="python" />
          </div>

          <div className={styles.skill}>
            <p>Django</p>
            <img src={django} alt="django" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
