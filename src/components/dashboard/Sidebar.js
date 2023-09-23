import React, { useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from "./Dashboard";
import { getStoredUsers, removeStoredUsers } from '../../utils/localstorage.js';
import "../../styles/dashboard.css";

const Sidebar = ({ userData, onProfileClick }) => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const location = useLocation();
    console.log("Location details: " + location);
    const currentUserData = getStoredUsers();
    const currentUser = currentUserData.username;

    const handleLogout = () => {
        removeStoredUsers();
        window.location.reload();
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const arrows = [
        <span className="material-symbols-outlined">keyboard_double_arrow_left</span>,
        <span className="material-symbols-outlined">keyboard_double_arrow_right</span>,
    ];

    return (
        <>
        <section className="sidebar">
          <div className={`nav-sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
              {/* Add sidebar icons with links to components here */}
                <Link
                    to="/home"
                    className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/home' ? 'active' : ''
                        }`}
                >
                        🏠 Home
                </Link>
                <Link
                    to="/quiz"
                    className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/quiz' ? 'active' : ''
                        }`}
                >
                    ✏️ Quiz
                </Link>
                <div
                    id="profile-link"
                    className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/quiz' || '/home' ? 'active' : ''
                        }`}
                    onClick={onProfileClick}
                >
                    👤 Profile
                </div>
                <Link
                    onClick={handleLogout}
                    to="/"
                    className={`dashboard-nav-link sidebar-nav-link ${location.pathname === '/' ? 'active' : ''
                        }`}
                >
                    🚪 Logout
                </Link>
          </div>
          <div className="nav-sidebar">
                <button onClick={toggleSidebar} className="toggle-btn">
                    {isOpen ? arrows[0] : arrows[1]}
                </button>
            </div>
        </section>
    </>
  );
};

export default Sidebar;
