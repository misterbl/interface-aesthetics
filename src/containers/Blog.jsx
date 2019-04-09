import React from "react";
import BluePhotoContainer from "../components/BluePhotoContainer";
import BlogCard from "../components/BlogCard";
import templeFiller from "../assets/temple_filler_model.jpg";

class Blog extends React.Component {
  render() {
    return (
      <main className>
        <BluePhotoContainer container="blog-photo" header="courses-header">
          <p>INTERFACE AESTHETICS</p>
          <p>LATEST NEWS</p>
        </BluePhotoContainer>
        <div className="p-70">
          <BlogCard
            image={templeFiller}
            title="Blog Title Goes Here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet purus eget lectus gravida, vel mattis magna placerat…"
            id={1}
          />
        </div>
      </main>
    );
  }
}

export default Blog;
