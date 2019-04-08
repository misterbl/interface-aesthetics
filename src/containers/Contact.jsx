import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import phone from "../assets/Phone.svg";
import email from "../assets/Email.svg";
import BluePhotoContainer from "../components/BluePhotoContainer";
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

  formSubmit = e => {
    const { name, email, phoneNumber, reason, message } = this.state;
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = { name, email, phoneNumber, reason, message };

    axios
      .post("http://localhost:5000/email", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };
  render() {
    return (
      <main>
        <BluePhotoContainer container="group-photo" header="contact-header">
          <p>Contact Interface</p>
        </BluePhotoContainer>
        <div className="contact-form">
          <div className="d-flex flex-column">
            <p className="blue-font w-75">Get in touch with us</p>
            <p className="w-50 font-16">
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
          <form onSubmit={this.formSubmit}>
            <div>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                type="text"
                placeholder="Email address"
              />
              <input
                onChange={e => this.setState({ phoneNumber: e.target.value })}
                name="phoneNumber"
                type="text"
                placeholder="Phone number"
              />
              <div className="select-container">
                <select
                  onChange={e => this.setState({ message: e.target.value })}
                  name="reason"
                >
                  <option selected>Reason for enquiry</option>
                  <option key="reason1">reason1</option>
                  <option key="reason2">reason2</option>
                  <option key="reason3">reason3</option>
                </select>
              </div>
              <textarea
                onChange={e => this.setState({ message: e.target.value })}
                placeholder="Message"
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
