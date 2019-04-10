import React from "react";
import tick from "../assets//Tick.svg";

const WhyCard = ({ title, text, small }) => (
  <div className={`why-card ${small ? "why-card__small" : ""}`}>
    <img src={tick} alt="tick" />
    <div className="ml-3">
      {title && <p>{title.toUpperCase()}</p>}
      {text && <p>{text}</p>}
    </div>
  </div>
);

export default WhyCard;
