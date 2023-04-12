import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/our-wilders">Nos Wilders</NavLink>
          </li>
          <li>
            <NavLink to="/my-profile">Mon profil</NavLink>
          </li>
          <li>
            <NavLink to="/login">Connexion</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
