import React, { useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from "./Dashboard";
import { getStoredUsers, removeStoredUsers } from '../../utils/localstorage.js';
import "../../styles/dashboard.css";

const Sidebar = ({ userData, onProfileClick }) => {
    const { isOpen } = useContext(SidebarContext);
    const location = useLocation();
    console.log("Location details: " + location);
    const currentUserData = getStoredUsers();
    const currentUser = currentUserData.username;

    const handleLogout = () => {
        removeStoredUsers();
        window.location.reload();
    }

  return (
    <div className={`nav-sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
          {/* Add sidebar icons with links to components here */}
            <Link
                to="/home"
                className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/home' ? 'active' : ''
                    }`}
            >
                Home
            </Link>
            <Link
                to="/quiz"
                className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/quiz' ? 'active' : ''
                    }`}
            >
                Quiz
            </Link>
            <div
                id="profile-link"
                className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/quiz' || '/home' ? 'active' : ''
                    }`}
                onClick={onProfileClick}
            >
                Profile
            </div>
            <Link
                onClick={handleLogout}
                to="/"
                className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/' ? 'active' : ''
                    }`}
            >
                Logout
            </Link>
    </div>
  );
};

export default Sidebar;
