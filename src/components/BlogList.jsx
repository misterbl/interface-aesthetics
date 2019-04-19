import React from "react";
import blogList from "../data/blogList";
import TitleWithMark from "./TitleWithMark";
import BlogCard from "./BlogCard";

const BlogList = () => (
  <div className="blog-list side-margin">
    <TitleWithMark text="Interface Aethestics in focus" />
    <div className="d-md-flex flex-wrap d-none">
      {blogList.map(blog => (
        <BlogCard
          key={blog.title}
          image={blog.image}
          title={blog.title}
          text={blog.text}
        />
      ))}
    </div>
    <div
      id="blog-list-indicator"
      className="carousel slide position-relative d-md-none"
      data-ride="blog-list-carousel"
      touch="true"
    >
      <ol className="carousel-indicators">
        {blogList.map(
          (blog, index) =>
            index < 7 && (
              <li
                key={blog.title}
                data-target="#blog-list-indicator"
                data-slide-to={index}
                className={`border-0 ${index === 0 && "active"}`}
              />
            )
        )}
      </ol>

      <div className="carousel-inner">
        {blogList.map((blog, index) => (
          <div
            className={`carousel-item ${index === 0 && "active"}`}
            key={blog.title}
          >
            <BlogCard image={blog.image} title={blog.title} text={blog.text} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogList;
