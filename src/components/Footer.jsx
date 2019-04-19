import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavDropdown, Modal, Button, Navbar } from "react-bootstrap";
import logo from "../assets/Interface_logo.svg";
import ROUTES from "../const/routes";

export class Footer extends React.Component {
  state = { isGdprChecked: false, name: "", email: "" };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  isChecked = e => {
    this.setState({ isGdprChecked: e.target.checked });
  };

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { isGdprChecked, name, email } = this.state;
    const isButtonDisabled =
      !isGdprChecked || name.length === 0 || email.length === 0;
    return (
      <footer className="h-25">
        <div className="bg-white p-5">
          <p className="blue-font">
            Stay up to date with the latest news from Interface Aesthetics
          </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name" />
              <input
                autoComplete="off"
                placeholder="Your name"
                id="name"
                className="pb-3"
                type="text"
                name="name"
                onChange={this.onNameChange}
                value={name}
              />
              <label htmlFor="email" />
              <input
                autoComplete="off"
                placeholder="Your email address"
                id="email"
                className="pb-3"
                type="text"
                name="email"
                onChange={this.onEmailChange}
                value={email}
              />
              <button
                disabled={isButtonDisabled}
                type="submit"
                className={isButtonDisabled ? "disabled" : ""}
              >
                SIGN UP
              </button>
            </div>
            <label className="d-flex mt-2">
              <input
                className="mt-1"
                type="checkbox"
                onChange={this.isChecked}
              />
              <span className="ml-2 font-14">
                GDPR consent Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce accumsan dictum mi, sed hendrerit tortor commodo sit
                amet. Vestibulum laoreet est et metus hendrerit mattis.
              </span>
            </label>
          </form>
        </div>
        <div className="d-flex justify-content-around my-4 font-12 mx-3">
          <p>©Interface Aeshetics 2019. All Rights Reserved</p>
          <img src={logo} alt="Interface Aestheticslogo" className="mx-5" />
          <p>Freelance Web Design - The Lonely Pixel</p>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
