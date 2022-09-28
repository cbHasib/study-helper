import React from "react";
import AddBreak from "../AddBreak/AddBreak";
import ReadSummary from "../ReadSummary/ReadSummary";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <UserInfo />
      <AddBreak />
      <ReadSummary/>
    </div>
  );
};

export default Sidebar;
