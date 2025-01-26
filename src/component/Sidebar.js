import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Wobb</div>
      <p className="welcome">Hi, Wobber</p>
      <ul>
        <li>Campaigns</li>
        <li>Messages</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Sidebar;
