import React from "react";
import WhyCard from "../components/WhyCard";
import whyChoose from "../data/whyChoose";
import TitleWithMark from "./TitleWithMark";

const WhyChoose = () => (
  <React.Fragment>
    <TitleWithMark text="Why choose Interface Aesthetics" />
    <div className="d-flex flex-wrap mt-3 justify-content-center">
      {whyChoose.map(reason => (
        <WhyCard key={reason.title} title={reason.title} text={reason.text} />
      ))}
    </div>
  </React.Fragment>
);

export default WhyChoose;
