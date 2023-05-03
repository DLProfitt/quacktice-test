import React, { useContext } from "react";
import { SidebarContext } from "./Dashboard";
import '../../styles/dashboard.css';

const MainContent = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const arrows = [<span class="material-symbols-outlined">
    keyboard_double_arrow_left
  </span>, <span class="material-symbols-outlined">
    keyboard_double_arrow_right
  </span>]

  return (
    <div className="main-content">
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? arrows[0] : arrows[1]}
      </button>
      {/* Render main content here */}
    </div>
  );
};

export default MainContent;
