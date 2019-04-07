import React from "react";
import WhyCard from "../components/WhyCard";
import whyChoose from "../data/whyChoose";
import TitleWithMark from "./TitleWithMark";

const WhyChoose = () => (
  <div className="why-container">
    <TitleWithMark text="Why choose Interface Aesthetics" />
    <div className="d-flex flex-wrap mt-3">
      {whyChoose.map(reason => (
        <WhyCard key={reason.title} title={reason.title} text={reason.text} />
      ))}
    </div>
  </div>
);

export default WhyChoose;
