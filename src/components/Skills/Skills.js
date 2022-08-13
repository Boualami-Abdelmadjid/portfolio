import React from "react";
import styles from "./Skills.module.css";
import htmlCss from "./img/htmlCss.png";
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
          <img id="html" src={htmlCss} alt="html and css" />
          <img id="js" src={js} alt="javascript" />
          <img src={reactLogo} alt="react" />
        </div>
        <div className={`${styles.backend} + ${styles.container}`}>
          <p>Backend</p>
          <img src={python} alt="python" />
          <img src={django} alt="django" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
