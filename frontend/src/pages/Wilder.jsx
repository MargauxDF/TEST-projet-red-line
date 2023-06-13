import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Wilder.module.css";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function Wilder() {
  const { id } = useParams();

  const [wilder, setWilder] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/wilders/${id}`)
      .then((response) => setWilder(response.data))
      .catch((err) => console.error(err));
  }, []);

  const sendEmail = () => {
    window.location.href = `mailto:${wilder.email}`;
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={wilder.profile_picture} alt={wilder.firstname} />
        </div>
        <div className={styles.infos}>
          <p> prénom : {wilder.firstname} </p>
          <p> nom de famille : {wilder.lastname} </p>
          <p> age : {wilder.age} </p>
          <p> campus : {wilder.campus} </p>
          <button onClick={sendEmail} type="button">
            Contactez-moi
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/wilders" className={styles.button}>
          Retour à la liste
        </Link>
      </div>
    </div>
  );
}

export default Wilder;
