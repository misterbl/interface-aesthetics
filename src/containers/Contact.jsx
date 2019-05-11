import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import phone from "../assets/Phone.svg";
import email from "../assets/Email.svg";
import contact from "../assets/contact.png";

export class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    message: "",
    sent: false,
    buttonText: "Send Message"
  };

  resetForm = () => {
    console.log("reset");
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  formSubmit = e => {
    const { name, phoneNumber, reason, message } = this.state;
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = { name, email, phoneNumber, reason, message };

    axios
      .post("http://localhost:5000/email", data)
      .then(res => {
        console.log("res", res);
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(e => {
        console.log("Message not sent", e);
      });
  };
  render() {
    const { name, phoneNumber, reason, message } = this.state;
    return (
      <main>
        <header>
          <div className="text-center w-75 ml-5 mt-5">
            <h2 className="m-0">CONTACT INTERFACE</h2>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              iaculis turpis dictum felis accumsan, semper bibendum neque
              pellentesque. Proin eget porta risus.
            </p>
            <div>
              <img src={phone} alt="phone" />
              <span>+44 (0) 123 456 789</span>
            </div>
            <div>
              <img src={email} alt="email" />
              <span>info@interfaceaesthetic.com</span>
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
                  onChange={e => this.setState({ message: e.target.value })}
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
            <button type="submit">SEND</button>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(Contact);
