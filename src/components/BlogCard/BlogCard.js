import React from "react";

const BlogCard = ({ blog, handleModal }) => {
  const { id, image, question } = blog;
  return (
    <div className="card card-compact w-full bg-white shadow static">
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt={question} />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title justify-center">{question}</h2>
        <div className="card-actions justify-end">
          <label
            onClick={() => handleModal(id)}
            htmlFor="my-modal-3"
            className="btn btn-primary w-full"
          >
            Get Answer
          </label>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
