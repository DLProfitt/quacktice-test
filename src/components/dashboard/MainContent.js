import { Route, Routes } from "react-router-dom";
//import React, { useContext } from "react";
import Home from "./Home";
import Quiz from "./Quiz";
//import { SidebarContext } from "./Dashboard";
import '../../styles/dashboard.css';

const MainContent = () => {
  //const { isOpen, setIsOpen } = useContext(SidebarContext);

  //const toggleSidebar = () => {
  //  setIsOpen(!isOpen);
  //};

  //const arrows = [
  //  <span className="material-symbols-outlined">keyboard_double_arrow_left</span>,
  //  <span className="material-symbols-outlined">keyboard_double_arrow_right</span>,
  //];

  return (
    <>
      <div className="main-content">
        {/*<button onClick={toggleSidebar} className="toggle-btn">*/}
        {/*  {isOpen ? arrows[0] : arrows[1]}*/}
        {/*</button>*/}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
