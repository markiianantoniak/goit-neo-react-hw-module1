import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "../src/Components/FriendsList/friends-list.module.css";
import "../src/Components/Profile/profile-task.module.css";
import "../src/Components/TransactionHistory/transaction-history.module.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
