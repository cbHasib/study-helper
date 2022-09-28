import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activity.css";

const Activity = ({topics}) => {

  return (
    <div className="activity-container">
      <h1 className="font-semibold text-3xl uppercase text-primary">Study Helper</h1>
      <h2 className="font-bold text-xl my-10">Select Today's Topic</h2>
      <div className="activity-card-container">
        {
          topics.map(topic => <ActivityCard key={topic.id} topic={topic}/>)
        }
      </div>
    </div>
  );
};

export default Activity;
