import React from "react";

const CourseInformation = ({ image, overview, details }) => (
  <div className="course-information">
    <img src={image} alt={overview} />
    <div>
      <p>{overview}</p>
      <ul>
        {details.map(paragraph => (
          <li>{paragraph}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default CourseInformation;
