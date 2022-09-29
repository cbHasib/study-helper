import React from "react";

const BlogCard = ({ blog }) => {
  const { id, image, question } = blog;
  return (
    <div className="card card-compact w-full bg-base-100 shadow">
      <figure>
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={question}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{question}</h2>
        <div className="card-actions justify-end">
          <label htmlFor="my-modal-3" className="btn btn-primary w-full">
            Get Answer
          </label>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
