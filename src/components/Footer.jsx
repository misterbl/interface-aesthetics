import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavDropdown, Modal, Button, Navbar } from "react-bootstrap";
import logo from "../assets/Interface_logo_darkblue.png";
import ROUTES from "../const/routes";

export class Footer extends React.Component {
  pushToIndex = () => {
    this.props.history.push(ROUTES.INDEX);
  };

  render() {
    return (
      <footer className="py-4 h-25 d-flex flex-wrap bg-black white">
        <div d-flex flex-column>
          <div className="image-container mx-5 pr-5 mt-2">
            <img
              className="w-100"
              src={logo}
              alt="interface aesthetics's logo"
            />
          </div>

          <div>social media logos</div>
          <p>
            {" "}
            Interface is a surgeon-led aesthetic training academy with
            innovation at its core. Our formula of detailed anatomical
            understanding combined with hours of injecting on live models aims
            to create a solid base of core competencies in non-surgical
            aesthetics that will enable graduates to start practising
            independently.
          </p>
          {/* // TODO to change the below with the right data */}
          <p className="font-10">
            ©2019 All Rights Reserved Harley Academy Ltd (registered in England
            and Wales #9426500)
          </p>
        </div>
        <div d-flex flex-column>
          <p>
            {" "}
            Sign up to our newsletter and receive training info, special offers,
            upcoming events and aesthetic medicine tips.
          </p>
          <p>Signup form</p>
        </div>
        <div d-flex flex-column>
          {/* TODO Check about terms & conditions and Privacy policy */}
          <a href={ROUTES.COURSES}>Terms & Conditions</a>
          <a href={ROUTES.COURSES}>Privacy policy</a>
          <a href={ROUTES.COURSES}>Courses</a>
          <a href={ROUTES.WHO_WE_TRAIN}>Who we train</a>
          <a href={ROUTES.BECOME_A_MODEL}>Become a model</a>
          <a href={ROUTES.ABOUT}>About</a>
          <a href={ROUTES.CONTACT_US}>Contact us</a>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
