import React, { createContext, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import '../../styles/dashboard.css';

export const SidebarContext = createContext();

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <Header />
      <div className="dashboard">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarContext.Provider>
  );
};

export default Dashboard;
