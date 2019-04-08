import React, { PureComponent } from "react";
import axios from "axios";
import BluePhotoContainer from "./BluePhotoContainer";

export default class ModelForm extends PureComponent {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    treatment: "",
    message: "",
    sent: false,
    buttonText: "Send Message"
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  formSubmit = e => {
    const { name, email, phoneNumber, treatment } = this.state;
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = { name, email, phoneNumber, reason: `treatement: ${treatment}` };

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
    const { name, email, phoneNumber } = this.state;
    return (
      <main>
        <BluePhotoContainer container="become-a-model" header="model-form">
          <p>INTERFACE AESTHETICS</p>
          <p>BECOME A MODEL PATIENT</p>
          <div className="model-form-container">
            <h3>Fill out the form below and we’ll be in touch shortly</h3>
            <form onSubmit={this.formSubmit}>
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
                      onChange={e =>
                        this.setState({ treatment: e.target.value })
                      }
                      name="treatment"
                    >
                      <option selected>
                        What treatment are you interested in?
                      </option>
                      <option key="treatment1">treatment1</option>
                      <option key="treatment2">treatment2</option>
                      <option key="treatment3">treatment3</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </BluePhotoContainer>
      </main>
    );
  }
}
