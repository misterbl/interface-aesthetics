import React from "react";

const BlogCard = ({ image, title, text, id, className = "" }) => (
  <div className={`blog-card card ${className}`}>
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={`/article/${id}`}>Read More</a>
    </div>
  </div>
);

export default BlogCard;
