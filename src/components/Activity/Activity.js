import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activity.css";
import logo from '../../images/book.svg'

const Activity = ({topics, handleReading}) => {

  return (
    <div className="activity-container">
      <h1 className="font-semibold text-3xl uppercase text-primary"><img src={logo} className="inline h-12 w-12" alt="" /> Study Helper</h1>
      <h2 className="font-bold text-xl my-10">Select Today's Topic</h2>
      <div className="activity-card-container">
        {
          topics.map(topic => <ActivityCard key={topic.id} topic={topic} handleReading={handleReading}/>)
        }
      </div>
    </div>
  );
};

export default Activity;
