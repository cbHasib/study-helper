import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import Modal from "../Modal/Modal";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [modalData, setModalData] = useState({});

  const handleModal = (id) => {
    const newModalData = blogData.find((blog) => blog.id === id);
    setModalData(newModalData);
  };

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <div className="p-[5%] mt-20 text-center">
      <h2 className="font-semibold text-4xl uppercase text-primary my-11 drop-shadow-md static z-0">
        Read Question and Answer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 xl:w-[90%] mx-auto">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} handleModal={handleModal} />
        ))}
      </div>

      <Modal modalData={modalData} setModalData={setModalData} />
    </div>
  );
};

export default Blog;
