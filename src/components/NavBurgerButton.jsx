import React from "react";
import cross from "../assets/cross-blue.svg";
const NavBurgerButton = ({ open }) => (
  <div
    className={`hamburger hamburger__container ${open && "hamburger__white"}`}
  >
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
