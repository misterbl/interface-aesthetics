import React from "react";
import mark from "../assets/Mark.svg";

const WhoWeTrainCard = ({ image, title, text }) => (
  <div className="blue-card">
    <img src={image} alt="title" />
    <div>{title}</div>
    <div>{text}</div>
  </div>
);

export default WhoWeTrainCard;
