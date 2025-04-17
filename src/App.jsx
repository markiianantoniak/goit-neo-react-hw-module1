import React from "react";
import Profile from "./components/Profile/profile-task.jsx";
import FriendList from "./components/FriendsList/friends-list.jsx";
import TransactionHistory from "./components/TransactionHistory/transaction-history.jsx";

import userData from "./components/data/userData.json";
import friends from "./components/data/friends.json";
import transactions from "./components/data/transactions.json";

const App = () => {
  return (
    <div className="app">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
