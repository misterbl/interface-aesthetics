import React from "react";
import mark from "../assets/Mark.svg";
import WhyCard from "../components/WhyCard";
import whyTrain from "../data/whyTrain";

const WhyTrain = () => (
  <div className="why-container">
    <img src={mark} />
    <span className="blue-font">Why Train in Aesthetic Medicine?</span>
    <div className="d-flex flex-wrap mt-3">
      {whyTrain.map(reason => (
        <WhyCard title={reason.title} small />
      ))}
    </div>
  </div>
);

export default WhyTrain;
