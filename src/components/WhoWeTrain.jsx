import React from "react";
import whoWeTrain from "../data/who-we-train";
import WhoWeTrainCard from "./WhoWeTrainCard";
import TitleWithMark from "./TitleWithMark";
import stethoscope from "../assets/stethoscope.svg";
import tooth from "../assets/tooth.svg";
import syringe from "../assets/syringe.svg";

const WhoWeTrain = ({ className = "" }) => (
  <div className={`${className} who-we-train side-margin`}>
    <TitleWithMark text="Who we train" />
    <div className="d-md-flex flex-wrap d-none d-md-block">
      {whoWeTrain.map(card => (
        <WhoWeTrainCard
          key={card.title}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
    <div
      id="who-we-train-indicator"
      className="carousel slide position-relative d-md-none"
      data-ride="carousel"
      touch="true"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#who-we-train-indicator"
          data-slide-to="0"
          className="active border-0"
        />
        <li
          data-target="#who-we-train-indicator"
          data-slide-to="1"
          className="border-0"
        />
        <li
          data-target="#who-we-train-indicator"
          data-slide-to="2"
          className="border-0"
        />
      </ol>

      <div className="carousel-inner">
        {whoWeTrain.map((card, index) => (
          <div
            className={`carousel-item ${index === 0 && "active"}`}
            key={card.title}
          >
            <WhoWeTrainCard
              image={card.image}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev d-none"
        href="#who-we-train-indicator"
        role="button"
        data-slide="prev"
      >
        <div className="carousel-prev-icon">
          <div aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </div>
      </a>
      <a
        className="carousel-control-next  d-none"
        href="#who-we-train-indicator"
        role="button"
        data-slide="next"
      >
        <div className="carousel-next-icon">
          <div aria-hidden="true" />
          <span className="sr-only">Next</span>
        </div>
      </a>
    </div>
  </div>
);

export default WhoWeTrain;
