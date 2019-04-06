import React from "react";
import mark from "../assets/Mark.svg";
import cpd from "../assets/CPDMemberlogo.jpeg";
import cosmeticInsure from "../assets/Cosmetic-Insure.png";
import ace from "../assets/ACE.png";
import hamiltonFraser from "../assets/Hamilton-Fraser.png";

const Accreditations = () => (
  <div className="bg-white p-60 accreditations-container">
    <div>
      <img src={mark} alt="mark" />
      <span className="dark-blue font-34">Our Accreditations</span>
    </div>
    <div className="d-flex accreditations justify-content-between">
      <img src={cpd} alt="cpd certification service" />
      <img src={cosmeticInsure} alt="cosmetic insure" />
      <img src={ace} alt="aesthetic complications expert" />
      <img src={hamiltonFraser} alt="hamilton fraser" />
    </div>
  </div>
);

export default Accreditations;
