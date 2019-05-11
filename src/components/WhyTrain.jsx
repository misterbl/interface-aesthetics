import React from "react";
import WhyCard from "../components/WhyCard";
import whyTrain from "../data/whyTrain";
import TitleWithMark from "./TitleWithMark";

const WhyTrain = ({ className = "" }) => (
  <div className={className}>
    <TitleWithMark text="Why Train in Aesthetic Medicine?" />
    <div className="d-flex flex-wrap mt-3 justify-content-center">
      {whyTrain.map(reason => (
        <WhyCard key={reason.title} title={reason.title} small />
      ))}
    </div>
  </div>
);

export default WhyTrain;
