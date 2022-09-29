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
    <div className="bg-white p-5 h-full m-[5%] lg:m-0  shadow-md rounded-2xl lg:rounded-none lg:rounded-bl-2xl">
      <div className="sticky top-5 right-0 text-center lg:text-left">
        <UserInfo />
        <AddBreak breakTime={breakTime} addBreakTime={addBreakTime} />
        <ReadSummary
          breakTime={breakTime}
          readingTime={readingTime}
          completedToast={completedToast}
        />
      </div>
    </div>
  );
};

export default Sidebar;
