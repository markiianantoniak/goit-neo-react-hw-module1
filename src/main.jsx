import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "../src/components/FriendsList/friends-list.module.css";
import "../src/components/Profile/profile-task.module.css";
import "../src/components/TransactionHistory/transaction-history.module.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
