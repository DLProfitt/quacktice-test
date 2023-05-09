import React, { useContext } from "react";
import { SidebarContext } from "./Dashboard";
import "../../styles/dashboard.css";

const Sidebar = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={isOpen ? "sidebar-open" : "sidebar-closed"}>
      {/* Add sidebar icons with links to components here */}
    </div>
  );
};

export default Sidebar;
