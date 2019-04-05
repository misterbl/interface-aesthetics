import React from "react";
import mark from "../assets/Mark.svg";
import whoWeTrain from "../data/who-we-train";
import WhoWeTrainCard from "./WhoWeTrainCard";

const WhoWeTrain = () => (
  <div className="p-60 who-we-train">
    <div>
      <img src={mark} alt="mark" />
      <span className="dark-blue font-34">Who we train</span>
    </div>
    <div className="d-flex flex-wrap">
      {whoWeTrain.map(card => (
        <WhoWeTrainCard
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  </div>
);

export default WhoWeTrain;
