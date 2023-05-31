import React from "react";
import { useUserContext } from "../contexts/UserContext";
import styles from "./MyProfile.module.css";

function MyProfile() {
  const { user } = useUserContext();

  return (
    <div className={styles.container}>
      <h1>Hello {user.username}</h1>
    </div>
  );
}

export default MyProfile;
