import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavDropdown, Modal, Button, Navbar } from "react-bootstrap";
import logo from "../assets/Interface_logo.svg";
import ROUTES from "../const/routes";

export class Footer extends React.Component {
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <footer className="p-4 h-25 mx-5">
        <div className="bg-white p-5">
          <p className="blue-font">
            Stay up to date with the latest news from Interface Aesthetics
          </p>
          <form onSubmit={this.handleSubmit} className="d-flex">
            <label htmlFor="name" />
            <input
              autoComplete="off"
              placeholder="Your name"
              id="name"
              className="pb-3"
              type="text"
              name="name"
            />
            <label htmlFor="email" />
            <input
              autoComplete="off"
              placeholder="Your email address"
              id="email"
              className="pb-3"
              type="text"
              name="email"
            />
            <button type="submit" className="sign-up-button">
              SIGN UP
            </button>
          </form>
        </div>
        <div className="d-flex justify-content-around my-4 font-16">
          <p>©Interface Aeshetics 2019. All Rights Reserved</p>
          <img src={logo} alt="Interface Aestheticslogo" className="mx-5" />
          <p>Freelance Web Design - The Lonely Pixel</p>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
