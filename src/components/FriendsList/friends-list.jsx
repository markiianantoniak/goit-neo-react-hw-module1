import React from "react";
import styles from "./friends-list.module.css";
import FriendListItem from "./friends-list-item";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
