import React from "react";

const BlogCard = (props) => {
  console.log(props);
  return (
    <div className="card card-compact w-full bg-base-100 shadow">
      <figure>
        <img
          className="w-full h-48 object-cover"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">Shoes!</h2>
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
