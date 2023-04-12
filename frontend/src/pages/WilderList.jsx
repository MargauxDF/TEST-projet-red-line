import React from "react";
import CardWilder from "../components/CardWilder";
import wilders from "../../data";
import styles from "./WilderList.module.css";

function WilderList() {
  return (
    <div className={styles.container}>
      {wilders.map((wilder) => (
        <CardWilder key={wilder.id} wilder={wilder} />
      ))}
    </div>
  );
}

export default WilderList;
