import React from "react";
import CourseImage from "./CourseImage";

const CourseCard = ({ title, description, price, id, image }) => (
  <li className="course-card m-4">
    <CourseImage image={image} />
    <div className="mt-4">
      <a
        dangerouslySetInnerHTML={{ __html: title }}
        href={`/courses/${id}`}
        className="font-18 text-dark"
      />

      <div
        className="font-16 course-card--description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        className="font-16 font-weight-bold"
        dangerouslySetInnerHTML={{ __html: price }}
      />
    </div>
  </li>
);

export default CourseCard;
