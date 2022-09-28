import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  const handleReading = (id) => {
    const selectedTopic = topics.find((topic) => topic.id === id);
    setReadingTime(selectedTopic.time + readingTime);
  };

  return (
    <div className="home-container">
      <Activity topics={topics} handleReading={handleReading} />
      <Sidebar readingTime={readingTime} />
    </div>
  );
};

export default Home;
