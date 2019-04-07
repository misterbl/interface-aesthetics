import React from "react";
import mark from "../assets/Mark.svg";

const TitleWithMark = ({ text }) => (
  <React.Fragment>
    <img className="mark-margin" src={mark} />
    <span className="blue-font">{text}</span>
  </React.Fragment>
);

export default TitleWithMark;
