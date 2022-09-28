import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="home-container">
      <Activity topics={data}/>
      <Sidebar />
    </div>
  );
};

export default Home;
