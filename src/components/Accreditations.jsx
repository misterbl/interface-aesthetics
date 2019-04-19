import React from "react";
import mark from "../assets/Mark.svg";
import cpd from "../assets/CPDMemberlogo.jpeg";
import cosmeticInsure from "../assets/Cosmetic-Insure.png";
import ace from "../assets/ACE.png";
import hamiltonFraser from "../assets/Hamilton-Fraser.png";
import allergan from "../assets/Allergan.png";
import TitleWithMark from "./TitleWithMark";

const Accreditations = () => (
  <div className="p-60">
    <TitleWithMark text="Our Accreditations" />
    <div className="d-flex accreditations-container accreditations justify-content-between flex-wrap">
      <img src={cpd} alt="cpd certification service" />
      <img src={cosmeticInsure} alt="cosmetic insure" />
      <img src={allergan} alt="allergan" />
      <img src={hamiltonFraser} alt="hamilton fraser" />
      <img src={ace} alt="aesthetic complications expert" />
    </div>
  </div>
);

export default Accreditations;
