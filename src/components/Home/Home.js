import React from "react";
import image from "./home-main.svg";
import styles from "./Home.module.css";
import Typed from "react-typed";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.main}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
      >
        <div className={styles.typing}>
          <p>Hi There! 👋 </p>
          <span>I'm </span>
          <Typed
            className={styles.typed}
            strings={[
              "a web developper",
              "a network engenieer ",
              "looking for opportunities ",
            ]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="pc" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
