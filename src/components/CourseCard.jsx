import React from "react";
import CourseImage from "./CourseImage";

const CourseCard = ({ title, handleClick, price, image }) => (
  <div
    className="course-card position-relative"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div />
    <div>
      <p>{title}</p>
      <p>{`from ${price}`}</p>
      <button onClick={handleClick}>{`MORE INFO & BOOK`}</button>
    </div>
  </div>
);

export default CourseCard;
