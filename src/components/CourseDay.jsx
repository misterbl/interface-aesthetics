import React from "react";
import tick from "../assets/Tick.svg";

const CourseDay = ({ index, description, details }) => (
  <div className="course-day">
    <div>{`Day ${index}`}</div>
    <div>{description}</div>
    {details.map(info => (
      <div key={info} className="position-relative">
        <img src={tick} />
        <p>{info}</p>
      </div>
    ))}
  </div>
);

export default CourseDay;
