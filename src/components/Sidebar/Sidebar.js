import React, { useEffect, useState } from "react";
import { addBreakTimeToDb, getBreakTimeDb } from "../../utilities/localStorage";
import AddBreak from "../AddBreak/AddBreak";
import ReadSummary from "../ReadSummary/ReadSummary";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.css";

const Sidebar = ({ readingTime, completedToast }) => {
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const breakTimeDb = getBreakTimeDb();
    setBreakTime(breakTimeDb);
  }, []);

  const addBreakTime = (time) => {
    setBreakTime(time);
    addBreakTimeToDb(time);
  };

  return (
    <div className="sidebar-container">
      <UserInfo />
      <AddBreak breakTime={breakTime} addBreakTime={addBreakTime} />
      <ReadSummary breakTime={breakTime} readingTime={readingTime} completedToast={completedToast}/>

    </div>
  );
};

export default Sidebar;
