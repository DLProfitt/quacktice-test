import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultProfilePic from '../../profile-pic-ernie.png';
import logo from '../../quacktice-test-icon.png';
import '../../styles/dashboard.css';
import '../user/ProfilePopup.css';
import { getStoredUsers, removeStoredUsers } from '../../utils/localstorage.js';


const Header = ({ userData, onProfileClick }) => {
  const location = useLocation();
  const currentUserData = getStoredUsers();
  const currentUser = currentUserData.username;

  const handleLogout = () => {
    removeStoredUsers();
    window.location.reload();
  }

  return (
    <header className="dashboard-header">
      <div className="left-section">
        <div
          className="profile-pic-container"
          onClick={onProfileClick}
        >
          <img
            src={defaultProfilePic}
            alt="User Profile"
            className="profile-picture"
          />
          <div className="profile-pic-hover">
            <i className="fas fa-pencil-alt"></i>
          </div>
        </div>
        <span>Hello, {currentUser}!</span>
      </div>
      <div className="middle-section">
        <img src={logo} alt="App Logo" className="app-logo" />
      </div>
      <div className="right-section">
        <Link
          to="/home"
          className={`dashboard-nav-link ${location.pathname === '/home' ? 'active' : ''
            }`}
        >
          Home
        </Link>
        <Link
          to="/quiz"
          className={`dashboard-nav-link ${location.pathname === '/quiz' ? 'active' : ''
            }`}
        >
          Quiz
        </Link>
        <Link
          onClick={handleLogout}
          to="/"
          className={`dashboard-nav-link ${location.pathname === '/quiz' ? 'active' : ''
            }`}
        >
          Logout
        </Link>
      </div >
    </header >
  );
};

export default Header;
