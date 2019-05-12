import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Interface_logo.svg";
import ROUTES from "../const/routes";
import validateEmail from "../utils/validateEmail";

export class Footer extends React.Component {
  state = {
    isGdprChecked: false,
    name: "",
    email: "",
    sent: false,
    validEmail: true,
    buttonText: "SIGN UP",
    error: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email } = this.state;
    this.setState({ validEmail: true, error: false });
    let data = { name, email, reason: "sign in to newsletter" };

    if (validateEmail(email)) {
      this.setState({ buttonText: "...sending" });
      axios
        .post("http://localhost:5000/email", data)
        .then(res => {
          this.setState({ sent: true }, this.resetForm());
        })
        .catch(() => {
          console.log("Message not sent");
          this.setState({ error: true, buttonText: "SIGN UP" });
        });
    } else this.setState({ validEmail: false });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      isGdprChecked: false,
      buttonText: "SIGN UP"
    });
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
    const {
      isGdprChecked,
      name,
      email,
      sent,
      validEmail,
      error,
      buttonText
    } = this.state;
    const isButtonDisabled =
      !isGdprChecked || name.length === 0 || email.length === 0;
    return (
      <footer className="h-25">
        <div className="bg-white p-5">
          <p className="blue-font">
            Stay up to date with the latest news from Interface Aesthetics
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex flex-wrap flex-md-nowrap">
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
              {sent && <div className="text-success">Message sent</div>}
              <button
                disabled={isButtonDisabled}
                type="submit"
                className={isButtonDisabled ? "disabled" : ""}
              >
                {buttonText}
              </button>
            </div>
            {!validEmail && (
              <div className="text-danger">Email address not valid</div>
            )}
            {error && (
              <div className="text-danger">Something went wrong, try again</div>
            )}
            <label className="d-flex mt-2">
              <input
                className="mt-1"
                type="checkbox"
                onChange={this.isChecked}
              />
              <span className="ml-2">
                Please confirm that you have read, understood and accept our
                <a href={ROUTES.PRIVACY_POLICY}>{` Privacy Policy`}</a>
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
