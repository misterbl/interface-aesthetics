import React from "react";
import mark from "../assets/Mark.svg";

const TitleWithMark = ({ text, color = "blue-font", className = "" }) => (
  <div className={className}>
    <img className="mark-margin d-none d-md-inline-block" src={mark} />
    <h3
      className={`${color} text-center d-none font-weight-bold d-md-inline-block`}
    >
      {text}
    </h3>
    <h2 className={`${color} neg-mb-10 text-center d-block d-md-none`}>
      {text}
    </h2>
    <img className="mark-margin d-block d-md-none" src={mark} />
  </div>
);

export default TitleWithMark;
