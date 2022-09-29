import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Blog from "../Blog/Blog";
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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-9">
        <div className="lg:col-span-7">
          <Activity topics={topics} handleReading={handleReading} />
        </div>
        <div className="lg:col-span-2">
          <Sidebar readingTime={readingTime} />
        </div>
      </div>

      <Blog />
    </div>
  );
};

export default Home;
