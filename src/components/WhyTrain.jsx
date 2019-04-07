import React from "react";
import WhyCard from "../components/WhyCard";
import whyTrain from "../data/whyTrain";
import TitleWithMark from "./TitleWithMark";

const WhyTrain = () => (
  <div className="why-container">
    <TitleWithMark text="Why Train in Aesthetic Medicine?" />
    <div className="d-flex flex-wrap mt-3">
      {whyTrain.map(reason => (
        <WhyCard key={reason.title} title={reason.title} small />
      ))}
    </div>
  </div>
);

export default WhyTrain;
