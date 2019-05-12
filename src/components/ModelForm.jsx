import React, { PureComponent } from "react";
import axios from "axios";
import modelContactReason from "../data/modelContactReason";
import modelPhoto from "../assets/model_page_lead_photo.png";
import validateEmail from "../utils/validateEmail";

export default class ModelForm extends PureComponent {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    treatment: "",
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
      email: "",
      phoneNumber: "",
      treatment: "",
      buttonText: "SEND"
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, email, phoneNumber, treatment } = this.state;
    this.setState({
      validEmail: true,
      error: false
    });

    let data = { name, email, phoneNumber, reason: `treatement: ${treatment}` };
    if (validateEmail(email)) {
      this.setState({ buttonText: "...sending" });

      axios
        .post("http://localhost:5000/email", data)
        .then(res => {
          this.setState({ sent: true, buttonText: "SEND" }, this.resetForm());
        })
        .catch(() => {
          console.log("Message not sent");
          this.setState({ error: true, buttonText: "SEND" });
        });
    } else this.setState({ validEmail: false });
  };
  render() {
    const {
      name,
      email,
      phoneNumber,
      sent,
      validEmail,
      buttonText,
      error
    } = this.state;
    return (
      <main>
        <header>
          <div className="text-center w-75 ml-5 mt-5">
            <h3 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h3>
            <h2 className="m-0">BECOME A MODEL PATIENT</h2>
          </div>
          <img
            src={modelPhoto}
            className="d-block w-100"
            alt="interface aesthetics's courses"
          />
        </header>
        <div className="p-60">
          <h3 className="blue-font font-weight-bold">
            Fill out the form below and we’ll be in touch shortly
          </h3>
          <form onSubmit={this.formSubmit} className="mt-5">
            <div>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                name="name"
                placeholder="Name"
                value={name}
              />
              <input
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                name="email"
                placeholder="Email address"
                value={email}
              />
              <input
                onChange={e => this.setState({ phoneNumber: e.target.value })}
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
              />
              <div>
                <div className="select-container">
                  <select
                    onChange={e => this.setState({ treatment: e.target.value })}
                    name="treatment"
                  >
                    <option selected>
                      What treatment are you interested in?
                    </option>
                    {modelContactReason.map(reason => (
                      <option key={reason}>{reason}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {sent && <div className="text-success">Message sent</div>}
            {!validEmail && (
              <div className="text-danger">Email address not valid</div>
            )}
            {error && (
              <div className="text-danger">Something went wrong, try again</div>
            )}
            <button className="mt-5" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </main>
    );
  }
}
