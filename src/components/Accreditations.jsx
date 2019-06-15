import React from "react";
import mark from "../assets/Mark.svg";
import cpd from "../assets/CPDMemberlogo.jpeg";
import cosmeticInsure from "../assets/Cosmetic-Insure.png";
import ace from "../assets/ACE.png";
import hamiltonFraser from "../assets/Hamilton-Fraser.png";
import allergan from "../assets/Allergan.png";
import TitleWithMark from "./TitleWithMark";

const Accreditations = ({ className = "" }) => (
  <div className={className}>
    <TitleWithMark text="Partners & Accreditations" />
    <p>
      We work with Allergan, the pharmaceutical industry leader in non-surgical
      aesthetics, ensuring that our delegates are trained using recognisable and
      reputable products (Botox ®, Juvederm ®)​
    </p>
    <div className="d-md-flex text-center accreditations-container justify-content-between flex-wrap">
      <img
        style={{ width: "110px !important" }}
        src={cpd}
        alt="cpd certification service"
      />
      <img src={cosmeticInsure} alt="cosmetic insure" />
      <img src={allergan} alt="allergan" />
      <img src={hamiltonFraser} alt="hamilton fraser" />
    </div>
  </div>
);

export default Accreditations;
