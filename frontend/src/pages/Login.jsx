import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useUserContext } from "../contexts/UserContext";
import styles from "./Login.module.css";

const schema = Joi.object({
  loginUser: Joi.string().required().messages({
    "string.empty": "Le nom d'utilisateur est requis",
  }),
  passwordUser: Joi.string().required().messages({
    "string.empty": "Le mot de passe est requis",
  }),
});

function Login() {
  const [loginUser, setLoginUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate({ loginUser, passwordUser });

    if (error) {
      const newErrors = {};
      error.details.forEach((detail) => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
    } else {
      setUser({ username: loginUser });
      navigate("/my-profile");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur
          <input
            type="text"
            onChange={(e) => setLoginUser(e.target.value)}
            value={loginUser}
          />
          {errors.loginUser && (
            <div className={styles.error}>{errors.loginUser}</div>
          )}
        </label>
        <label>
          Mot de Passe
          <input
            type="password"
            onChange={(e) => setPasswordUser(e.target.value)}
            value={passwordUser}
          />
          {errors.passwordUser && (
            <div className={styles.error}>{errors.passwordUser}</div>
          )}
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
