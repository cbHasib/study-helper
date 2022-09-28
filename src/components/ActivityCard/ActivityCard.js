import React from "react";
import "./ActivityCard.css";

const ActivityCard = ({ topic }) => {
  const { id, name, about, time, image, course } = topic;
  return (
    <div className="card w-full bg-white shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-32 object-cover"
        />
      </figure>
      <div className="card-body pt-4">
        <h2 className="card-title">{name}</h2>
        <p className="gray-text">
          {about}
        </p>
        <p className="sub-text-black">
          Course : <span className="font-bold">{course}</span>
        </p>
        <p className="sub-text-black">
          Time required : <span className="font-bold">{time}m</span>
        </p>
        <div className="card-actions w-full pt-1">
          <button className="btn btn-primary w-full">Start Reading</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
