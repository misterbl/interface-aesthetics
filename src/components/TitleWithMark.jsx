import React from "react";
import mark from "../assets/Mark.svg";

const TitleWithMark = ({ text, color = "blue-font" }) => (
  <React.Fragment>
    <img className="mark-margin d-none d-md-inline-block" src={mark} />
    <span className={`${color} d-none d-md-inline-block`}>{text}</span>
    <div className={`${color} d-block d-md-none`}>{text}</div>
    <img className="mark-margin d-block d-md-none" src={mark} />
  </React.Fragment>
);

export default TitleWithMark;
