import React from "react";
import "../styles/Topbar.css";

const TopBar = ({ title }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h1>{title}</h1>
      </div>
      <div className="top-bar-right">
        <div className="user-profile">
          <img
            src="../assets/user-img.jpg"
            alt="User Profile"
            className="profile-image"
          />
          <span className="username">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
