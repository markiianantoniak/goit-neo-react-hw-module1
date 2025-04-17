import React from "react";
import Profile from "./Components/Profile/profile-task.jsx";
import FriendList from "./Components/FriendsList/friends-list.jsx";
import TransactionHistory from "./Components/TransactionHistory/transaction-history.jsx";

import userData from "./Components/data/userData.json";
import friends from "./Components/data/friends.json";
import transactions from "./Components/data/transactions.json";

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
