import React from "react";
import mark from "../assets/Mark.svg";

const TitleWithMark = ({ text, color = "blue-font" }) => (
  <React.Fragment>
    <img className="mark-margin d-none d-md-inline-block" src={mark} />
    <h3
      className={`${color} text-center d-none font-weight-bold d-md-inline-block`}
    >
      {text}
    </h3>
    <h2 className={`${color} text-center d-block d-md-none`}>{text}</h2>
    <img className="mark-margin d-block d-md-none" src={mark} />
  </React.Fragment>
);

export default TitleWithMark;
