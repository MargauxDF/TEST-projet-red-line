import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Wilder.module.css";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function Wilder() {
  const { id } = useParams();

  const [wilder, setWilder] = useState();

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/wilders/${id}/projects`)
      .then((response) => setWilder(response.data))
      .catch((err) => console.error(err));
  }, []);

  const sendEmail = () => {
    window.location.href = `mailto:${wilder.email}`;
  };

  if (!wilder) return null;
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={wilder.profile_picture} alt={wilder.firstname} />
        </div>
        <div className={styles.infos}>
          <p> prénom : {wilder.firstname} </p>
          <p> nom de famille : {wilder.lastname} </p>
          <p> âge : {wilder.age} </p>
          <p> campus : {wilder.campus} </p>
          <p>
            projects :
            {wilder.projects.length ? (
              <ul className={styles.projectList}>
                {wilder.projects.map((project) => (
                  <li key={project.id}>
                    <a href={project.link} className={styles.projectLinks}>
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ce wilder n'a pas encore de projets!</p>
            )}
          </p>
          <button
            onClick={sendEmail}
            type="button"
            className={styles.contactMeButton}
          >
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
