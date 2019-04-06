import React from "react";
import { withRouter } from "react-router-dom";
import phone from "../assets/Phone.svg";
import email from "../assets/Email.svg";
export class Contact extends React.Component {
  render() {
    return (
      <main>
        <div className="group-photo position-relative">
          <div className="bg-blue" />
          <div className="contact-header">
            <p>Contact Interface</p>
          </div>
        </div>
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
          <form>
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email address" />
              <input type="text" placeholder="Phone number" />
              <select className="form-control form-control-sm">
                <option selected>Reason for enquiry</option>
                <option key="reason1">reason1</option>
                <option key="reason2">reason2</option>
                <option key="reason3">reason3</option>
              </select>
              <textarea placeholder="Message" />{" "}
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(Contact);
