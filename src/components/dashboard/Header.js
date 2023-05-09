import React from "react";
import { Link, useLocation } from "react-router-dom";
import defaultProfilePic from "../../profile-pic-ernie.png";
import logo from "../../quacktice-test-icon.png";
import '../../styles/dashboard.css';
import Quiz from "./Quiz";

const Header = () => {
  // Replace the user object with actual user data when available
  const user = {
    firstName: "Ernie",
    profilePic: defaultProfilePic,
  };

  const location = useLocation();

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
        <Link
          to="/home"
          className={`dashboard-nav-link ${location.pathname === "/home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/quiz"
          className={`dashboard-nav-link ${location.pathname === "/quiz" ? "active" : ""}`}
        >
          Quiz
        </Link>
        <Link
          to="/about-me"
          className={`dashboard-nav-link ${location.pathname === "/about-me" ? "active" : ""}`}
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
