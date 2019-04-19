import React from "react";
import mark from "../assets/Mark.svg";

const TitleWithMark = ({ text }) => (
  <React.Fragment>
    <img className="mark-margin d-none d-md-inline-block" src={mark} />
    <span className="blue-font d-none d-md-inline-block">{text}</span>
    <div className="blue-font d-block d-md-none ">{text}</div>
    <img className="mark-margin d-block d-md-none" src={mark} />
  </React.Fragment>
);

export default TitleWithMark;
