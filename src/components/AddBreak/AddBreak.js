import React from "react";
import "./AddBreak.css";

const AddBreak = () => {
  const time = 25;
  let isActive = "active-break";
  let is10Active = "";
  let is15Active = "";
  let is20Active = "";
  let is25Active = "";
  let is30Active = "";

  if (time === 10) is10Active = isActive;
  else if (time === 15) is15Active = isActive;
  else if (time === 20) is20Active = isActive;
  else if (time === 25) is25Active = isActive;
  else if (time === 30) is30Active = isActive;

  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Add a Break</h2>

      <div className="break-timing-container p-4 rounded-xl mb-8">
        <button className={`btn btn-circle btn-primary + ${is10Active}`}>10m</button>
        <button className={`btn btn-circle btn-primary + ${is15Active}`}>15m</button>
        <button className={`btn btn-circle btn-primary + ${is20Active}`}>20m</button>
        <button className={`btn btn-circle btn-info + ${is25Active}`}>25m</button>
        <button className={`btn btn-circle + ${is30Active}`}>30m</button>
      </div>
    </div>
  );
};

export default AddBreak;
