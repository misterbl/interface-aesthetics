import React from "react";
import TitleWithMark from "./TitleWithMark";
import BlogCard from "./BlogCard";
import healthEducation from "../assets/health-education-enlnad-nhs.png";

const BlogList = ({ blogList }) => (
  <div className="blog-list">
    <TitleWithMark text="Interface Aethestics in focus" />
    <div className="d-flex flex-wrap justify-content-center">
      {/* {blogList.map(blog => (
        <BlogCard
          key={blog.title}
          image={blog.image}
          title={blog.title}
          text={blog.text}
          id={blog.id}
          className="m-4"
        />
      ))} */}
      <BlogCard
        key="Non surgical aesthetics"
        image={healthEducation}
        title="Non surgical aesthetics"
        text=" Non-surgical aesthetics is a term which is used to encompass a wide
          range of cosmetic treatments not undertaken in a surgical setting, being
          minimally invasive. Commonly, procedures include anti-wrinkle injections
          with products such as Botox ® and dermal filler injections."
        id={1}
        className="m-4"
      />
    </div>
  </div>
);

export default BlogList;
