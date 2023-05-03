import React, { useEffect, useState } from "react";
import axios from "axios";
import CardWilder from "../components/CardWilder";
import styles from "./WilderList.module.css";

function WilderList() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/wilders")
      .then((response) => setWilders(response.data));
  }, []);

  return (
    <div className={styles.container}>
      {wilders.map((wilder) => (
        <CardWilder key={wilder.id} wilder={wilder} />
      ))}
    </div>
  );
}

export default WilderList;
