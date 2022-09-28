import React from "react";
import "./AddBreak.css";

const AddBreak = ({breakTime, setBreakTime}) => {
  
  let isActive = "active-break";
  let is10Active = "";
  let is15Active = "";
  let is20Active = "";
  let is25Active = "";
  let is30Active = "";

  if (breakTime === 10) is10Active = isActive;
  else if (breakTime === 15) is15Active = isActive;
  else if (breakTime === 20) is20Active = isActive;
  else if (breakTime === 25) is25Active = isActive;
  else if (breakTime === 30) is30Active = isActive;

  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Add a Break</h2>

      <div className="break-timing-container p-4 rounded-xl mb-8">
        <button
          onClick={() => setBreakTime(10)}
          className={`btn btn-circle btn-primary + ${is10Active}`}
        >
          10m
        </button>
        <button
          onClick={() => setBreakTime(15)}
          className={`btn btn-circle btn-primary + ${is15Active}`}
        >
          15m
        </button>
        <button
          onClick={() => setBreakTime(20)}
          className={`btn btn-circle btn-primary + ${is20Active}`}
        >
          20m
        </button>
        <button
          onClick={() => setBreakTime(25)}
          className={`btn btn-circle btn-primary + ${is25Active}`}
        >
          25m
        </button>
        <button
          onClick={() => setBreakTime(30)}
          className={`btn btn-circle btn-primary + ${is30Active}`}
        >
          30m
        </button>
      </div>
    </div>
  );
};

export default AddBreak;
