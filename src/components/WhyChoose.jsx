import React from "react";
import mark from "../assets/Mark.svg";
import WhyCard from "../components/WhyCard";
import whyChoose from "../data/whyChoose";

const WhyChoose = () => (
  <div className="why-container">
    <img src={mark} />
    <span className="blue-font">Why choose Interface Aesthetics</span>
    <div className="d-flex flex-wrap mt-3">
      {whyChoose.map(reason => (
        <WhyCard title={reason.title} text={reason.text} />
      ))}
    </div>
  </div>
);

export default WhyChoose;
