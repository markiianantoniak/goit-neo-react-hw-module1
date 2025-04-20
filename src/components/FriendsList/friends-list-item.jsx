import React from "react";
import styles from "./friends-list.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.statusText} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
