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
          Hello again! 👋 <br /> <br />
          I'm glad that you want to know more about me, I'm{" "}
          <span id={styles.greet}> Boualami Abdelmadjid</span> , network
          engenieering graduate from Djilali Liabes University, Sidi Bel Abbes.{" "}
          <br /> <br />
          I'm a junior web developer with cyber-security background, I'm based
          in Sidi Bel Abbes, Algeria and available if any opportunity presented
          itself. <br /> <br />
          My mail address is:{" "}
          <a type="mail" href="mailto:majidaveiro@gmail.com">
            majidaveiro@gmail.com
          </a>
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
