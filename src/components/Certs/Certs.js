import React, { useRef, useEffect, useState } from "react";
import styles from "./Certs.module.css";
import images from "./CertsImages";
import { motion, AnimatePresence } from "framer-motion";

export default function Certs() {
  const certs = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(certs.current.scrollWidth - certs.current.offsetWidth);
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
      >
        <p>
          The certifications I got are from{" "}
          <span className={styles.company}>Cisco, Huawei, Microsoft </span> and{" "}
          <span className={styles.company}> CompTia </span>
          after passing their exams, and TryHackMe for completing their paths
          for cyber-security purposes <br />
          Check my credly account from{" "}
          <a
            href="https://www.credly.com/users/abdelmadjid-boualami"
            target="_blank"
          >
            here
          </a>
        </p>
        <motion.div className={styles.Certs}>
          <motion.div
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.innerCerts}
            ref={certs}
          >
            {images.map((image) => {
              return (
                <motion.div key={image}>
                  <img src={image} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
