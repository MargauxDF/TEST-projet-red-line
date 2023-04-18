import React from "react";
import { motion } from "framer-motion";
import CardWilder from "../components/CardWilder";
import wilders from "../../data";
import styles from "./WilderList.module.css";
import { routeVariants, childVariants } from "../motion/variants";

function WilderList() {
  return (
    <motion.div
      className={styles.container}
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      {wilders.map((wilder) => (
        <motion.div variants={childVariants} initial="initial" animate="final">
          <CardWilder key={wilder.id} wilder={wilder} />{" "}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default WilderList;
