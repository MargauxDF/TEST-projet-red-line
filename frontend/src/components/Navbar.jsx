import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const getActiveLinkClassName = ({ isActive }) => {
    if (isActive) return styles.active;
    return styles.notActive;
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <NavLink to="/" className={getActiveLinkClassName}>
            Accueil
          </NavLink>
          <NavLink to="/our-wilders" className={getActiveLinkClassName}>
            Nos Wilders
          </NavLink>
          <NavLink to="/my-profile" className={getActiveLinkClassName}>
            Mon profil
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/login" className={getActiveLinkClassName}>
            Connexion
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
