import React, { createContext, useState } from "react";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import MainContent from "./MainContent.js";
import ProfilePopup from "../user/ProfilePopup.js";
import '../../styles/dashboard.css';

export const SidebarContext = createContext();

const Dashboard = ({ userData }) => {
  console.log(userData)
  const [isOpen, setIsOpen] = useState(true);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

  const handleProfileClick = () => {
    setIsProfilePopupVisible((prevVisible) => !prevVisible);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <Header userData={userData} onProfileClick={handleProfileClick} />
      <div className="dashboard">
        <MainContent />
      </div>
        <Sidebar userData={userData} onProfileClick={handleProfileClick} />
      {isProfilePopupVisible && <ProfilePopup onClose={handleProfileClick} userData={userData} />}
    </SidebarContext.Provider>
  );
};

export default Dashboard;
