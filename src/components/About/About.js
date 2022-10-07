import React from "react";
import styles from "./About.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.about}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
      >
        <p>
          <span className={styles.hi}>
            Hi again! <span className="waving">👋</span>
          </span>{" "}
          I'm glad that you want to know more about me, I'm{" "}
          <span id={styles.greet}> Boualami Abdelmadjid</span> , network
          engenieering graduate from Djilali Liabes University, Sidi Bel Abbes.{" "}
          <br /> <br />
          I'm a junior web developer with cyber-security background, working for
          <span id={styles.greet}> Sfizer Global Solutions </span> since
          september 2022.
          <br /> <br />
          I'm based in Sidi Bel Abbes, Algeria and my mail address is:{" "}
          <a type="mail" href="mailto:majidaveiro@gmail.com">
            majidaveiro@gmail.com
          </a>
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
