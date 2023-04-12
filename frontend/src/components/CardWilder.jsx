import React from "react";
import PropTypes from "prop-types";
import styles from "./CardWilder.module.css";

function CardWilder({
  wilder: { profilPicture, firstname, lastname, campus },
}) {
  return (
    <div className={styles.card}>
      <div>
        <img
          src={profilPicture}
          alt={firstname}
          className={styles.profilPicture}
        />
      </div>
      <div className={styles.body}>
        <div>
          {" "}
          <h2>
            {firstname} {lastname}
          </h2>{" "}
          <h3>{campus}</h3>
        </div>
      </div>
    </div>
  );
}

CardWilder.propTypes = {
  wilder: PropTypes.shape({
    profilPicture: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    campus: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardWilder;
