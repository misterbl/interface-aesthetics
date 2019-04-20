import React from "react";
import cross from "../assets/cross-white.svg";
const NavBurgerButton = ({ open }) => (
  <div className="hamburger hamburger__container">
    <div className="hamburger hamburger__line-container">
      {open ? (
        <img src={cross} alt="close menu" />
      ) : (
        <React.Fragment>
          <div className="hamburger hamburger__line" />
          <div className="hamburger hamburger__line" />
          <div className="hamburger hamburger__line" />
        </React.Fragment>
      )}
    </div>
  </div>
);

export default NavBurgerButton;
