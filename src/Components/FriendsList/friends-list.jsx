import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img src={avatar} alt="Avatar" width="48" className="avatar" />
      <p className="name">{name}</p>
      <p className={`status-text ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id} className="item">
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
export { FriendListItem };
