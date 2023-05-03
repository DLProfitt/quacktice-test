import React from "react";
import { NavLink } from "react-router-dom";
import defaultProfilePic from "../../profile-pic-ernie.png";
import logo from "../../quacktice-test-icon.png";
import '../../styles/dashboard.css';

const Header = () => {
  // Replace the user object with actual user data when available
  const user = {
    firstName: "Ernie",
    profilePic: defaultProfilePic,
  };

  return (
    <header className="dashboard-header">
      <div className="left-section">
        <img src={user.profilePic} alt="User Profile" className="profile-picture" />
        <span>Hello, {user.firstName}!</span>
      </div>
      <div className="middle-section">
        <img src={logo} alt="App Logo" className="app-logo" />
      </div>
      <div className="right-section">
        <NavLink to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/quiz" activeClassName="active">Quiz</NavLink>
        <NavLink to="/about-me" activeClassName="active">About Me</NavLink>
      </div>
    </header>
  );
};

export default Header;
