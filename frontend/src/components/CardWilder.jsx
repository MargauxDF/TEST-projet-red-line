import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CardWilder.module.css";

function CardWilder({
  wilder: { profile_picture: profilePicture, firstname, lastname, id },
}) {
  return (
    <div className={styles.card}>
      <div>
        <img
          src={profilePicture}
          alt={firstname}
          className={styles.profilPicture}
        />
      </div>
      <div className={styles.body}>
        <div>
          <h2>
            {firstname} {lastname}
          </h2>
          <Link to={`/wilders/${id}`}>Voir plus</Link>
        </div>
      </div>
    </div>
  );
}

CardWilder.propTypes = {
  wilder: PropTypes.shape({
    profile_picture: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    campus: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardWilder;
