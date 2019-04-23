import React from "react";

const CourseInformation = ({ image, overview, details }) => (
  <div className="course-information flex-wrap flex-lg-nowrap">
    <img src={image} alt={overview} />
    <div>
      <p>{overview}</p>
      <ul className="orange-dot-li">
        {details.map(paragraph => (
          <li key={paragraph}>{paragraph}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default CourseInformation;
