import React, { useEffect, useState } from "react";
import AddBreak from "../AddBreak/AddBreak";
import ReadSummary from "../ReadSummary/ReadSummary";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.css";

const Sidebar = ({ readingTime }) => {
  const [breakTime, setBreakTime] = useState(0);


  return (
    <div className="sidebar-container">
      <UserInfo />
      <AddBreak breakTime={breakTime} setBreakTime={setBreakTime} />
      <ReadSummary breakTime={breakTime} readingTime={readingTime} />
    </div>
  );
};

export default Sidebar;
