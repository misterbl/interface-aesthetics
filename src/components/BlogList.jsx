import React from "react";
import TitleWithMark from "./TitleWithMark";
import BlogCard from "./BlogCard";

const BlogList = ({ blogList }) => (
  <div className="blog-list">
    <TitleWithMark text="Interface Aethestics in focus" />
    <div className="d-flex flex-wrap">
      {blogList.map(blog => (
        <BlogCard
          key={blog.title}
          image={blog.image}
          title={blog.title}
          text={blog.text}
          id={blog.id}
          className="m-4"
        />
      ))}
    </div>
  </div>
);

export default BlogList;
