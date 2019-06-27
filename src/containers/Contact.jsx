import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import phoneIcon from "../assets/Phone.svg";
import emailIcon from "../assets/Email.svg";
import contact from "../assets/contact.png";
import validateEmail from "../utils/validateEmail";

export class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    message: "",
    sent: false,
    buttonText: "SEND",
    validEmail: true,
    error: false
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      reason: "",
      email: "",
      buttonText: "SEND",
      phoneNumber: ""
    });
  };

  formSubmit = e => {
    const { name, phoneNumber, reason, message, email } = this.state;
    e.preventDefault();
    this.setState({
      validEmail: true,
      error: false
    });

    let data = { name, email, phoneNumber, reason, message };
    if (validateEmail(email)) {
      this.setState({ buttonText: "...sending" });
      axios
        .post(
          "https://interfaceaesthetics.co.uk/email",
          data
        )
        .then(res => {
          console.log("res", res);
          this.setState({ sent: true, buttonText: "SEND" }, this.resetForm());
        })
        .catch(e => {
          console.log("Message not sent", e);
          this.setState({ error: true, buttonText: "SEND" });
        });
    } else this.setState({ validEmail: false });
  };
  render() {
    const {
      name,
      phoneNumber,
      sent,
      message,
      validEmail,
      buttonText,
      error
    } = this.state;
    return (
      <main>
        <header>
          <div className="text-center">
            <h2 className="m-0">Contact Interface</h2>
          </div>
          <img
            src={contact}
            className="d-block w-100"
            alt="contact interface aesthetics"
          />
        </header>
        <div className="contact-form flex-wrap flex-lg-nowrap">
          <div className="d-flex flex-column w-50-container pr-5">
            <h3 className="blue-font w-75 font-weight-bold">
              Get in touch with us
            </h3>
            <p>
              Fill out our online enquiry form, send us an email, or call us to
              find out which aesthetic course could be right for you. One of the
              Interface Aesthetics team will be happy to discuss any questions
              you may have.
            </p>
            <div>
              <img src={phoneIcon} alt="phone" />
              <span>+44 (0) 7905341021</span>
            </div>
            <div>
              <img src={emailIcon} alt="email" />
              <span>info@interfaceaesthetics.co.uk</span>
            </div>
          </div>
          <form onSubmit={this.formSubmit} className="w-50-container">
            <div>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                type="text"
                placeholder="Name"
                value={name}
              />
              <input
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                type="text"
                placeholder="Email address"
                value={this.state.email}
              />
              <input
                onChange={e => this.setState({ phoneNumber: e.target.value })}
                name="phoneNumber"
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
              />
              <div className="select-container h-100">
                <select
                  onChange={e => this.setState({ reason: e.target.value })}
                  name="reason"
                >
                  <option selected>Reason for enquiry</option>
                  <option key="DELEGATE ENQUIRY">DELEGATE ENQUIRY</option>
                  <option key="MODEL ENQUIRY">MODEL ENQUIRY</option>
                  <option key="GENERAL ENQUIRY">GENERAL ENQUIRY</option>
                </select>
              </div>
              <textarea
                onChange={e => this.setState({ message: e.target.value })}
                placeholder="Message"
                value={message}
              />
            </div>
            {sent && <div className="text-success">Message sent</div>}
            {!validEmail && (
              <div className="text-danger">Email address not valid</div>
            )}
            {error && (
              <div className="text-danger">Something went wrong, try again</div>
            )}
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(Contact);
