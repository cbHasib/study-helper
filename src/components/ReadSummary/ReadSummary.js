import React from "react";
import "./ReadSummary.css";

const ReadSummary = () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3 pt-3">Reading Details</h2>

      <div className="summary-timing-container p-4 rounded-xl mb-2 flex justify-between items-center">
        <span className="font-medium">Reading Time:</span>
        <span className="text-[#9DACC1]">200minutes</span>
      </div>
      <div className="summary-timing-container p-4 rounded-xl mb-4 flex justify-between items-center">
        <span className="font-medium">Break Time:</span>
        <span className="text-[#9DACC1]">200minutes</span>
      </div>
      <button className="btn btn-primary w-full mt-5">
        Activity Completed
      </button>
    </div>
  );
};

export default ReadSummary;
