import React from "react";
import "./ReadSummary.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadSummary = ({ readingTime, breakTime }) => {
  const showToastMessage = () => {
    toast.success("Congratulations! Your have finished your study!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <div>
      <h2 className="font-medium text-xl mb-3 pt-3">Reading Details</h2>

      <div className="bg-[#F2F4FA] p-4 rounded-xl mb-2 flex justify-between items-center shadow">
        <span className="font-medium">Reading Time:</span>
        <span className="text-[#9DACC1]">{readingTime} minutes</span>
      </div>
      <div className="bg-[#F2F4FA] p-4 rounded-xl mb-4 flex justify-between items-center shadow">
        <span className="font-medium">Break Time:</span>
        <span className="text-[#9DACC1]">{breakTime} minutes</span>
      </div>
      <button
        onClick={showToastMessage}
        className="btn btn-primary w-full mt-5"
      >
        Activity Completed
      </button>
      <ToastContainer toastStyle={{ backgroundColor: "rgb(241 245 249)" }} />
    </div>
  );
};

export default ReadSummary;
