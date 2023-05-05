import { Route } from "react-router-dom";
import React, { useContext } from "react";
import Home from "./Home";
import { SidebarContext } from "./Dashboard";
import '../../styles/dashboard.css'; // Import the mainContent.css file

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
    <>
      <div className="main-content">
        <button onClick={toggleSidebar} className="toggle-btn">
          {isOpen ? arrows[0] : arrows[1]}
        </button>
        {<Home />}
      </div>
    </>
  );
};

export default MainContent;
