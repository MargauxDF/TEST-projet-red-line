import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useUserContext } from "../contexts/UserContext";

function Navbar() {
  const getActiveLinkClassName = ({ isActive }) => {
    if (isActive) return styles.active;
    return styles.notActive;
  };

  const { user, setUser } = useUserContext();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <NavLink to="/" className={getActiveLinkClassName}>
            Accueil
          </NavLink>
          <NavLink to="/wilders" className={getActiveLinkClassName}>
            Nos Wilders
          </NavLink>
          {user !== null ? (
            <NavLink to="/my-profile" className={getActiveLinkClassName}>
              Mon profil
            </NavLink>
          ) : null}
        </ul>
        <ul>
          {user === null ? (
            <NavLink to="/login" className={getActiveLinkClassName}>
              Connexion
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={getActiveLinkClassName}
              onClick={() => setUser(null)}
            >
              Déconnexion
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
