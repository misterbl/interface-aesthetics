import React from "react";
import TitleWithMark from "./TitleWithMark";
import BlogCard from "./BlogCard";
import healthEducation from "../assets/health-education-enlnad-nhs.png";
import dermalFillerLowerFace from "../assets/dermalFillerLowerFace.jpg";
import eyelid from "../assets/eyelid.jpg";

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
      <BlogCard
        key="Dermal Filler for the Lower Face: A New Kid on the Block"
        image={dermalFillerLowerFace}
        title="Dermal Filler for the Lower Face: A New Kid on the Block"
        text="Lower face definition can be one of the key challenges in medical aesthetics. The issues surrounding the jawline and chin are multiple, and can include the ageing process, an unbalanced profile, and poor correspondence with desired features in line with masculinity or femininity."
        id={2}
        className="m-4"
      />
      <BlogCard
        key="Complications in Non-Surgical Aesthetics: Blepharoptosis"
        image={eyelid}
        title="Complications in Non-Surgical Aesthetics: Blepharoptosis"
        text="A solid understanding of common and important complications is crucial for
        the safe and effective practice of non-surgical aesthetics. One
        complication often cited with regard to the use of botulinum toxin (Botox
        ®) is a droopy eye, otherwise known as blepharoptosis."
        id={3}
        className="m-4"
      />
    </div>
  </div>
);

export default BlogList;
