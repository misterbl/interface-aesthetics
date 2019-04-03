import React from "react";
import { withRouter } from "react-router-dom";
import mark from "../assets/Mark.svg";
import ROUTES from "../const/routes";
import Accordion from "../components/Accordion";

export class Model extends React.Component {
  state = { isActive: "" };

  onClick = e => {
    const { isActive } = this.state;
    const { value } = e.currentTarget;
    if (isActive === value) {
      return this.setState({ isActive: "" });
    }
    this.setState({ isActive: value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="bg-blue position-relative">
          <div className="model-photo" />
          <div className="model-header">
            <p>INTERFACE AESTHETICS</p>
            <p>BECOME A MODEL PATIENT</p>
            <p>
              Model patientss are in the center of all our traning courses.
              Model patientss are in the center of all our traning courses.
              Model patientss are in the center of all our traning courses.
              Model patientss are in the center of all our traning courses.
              Model patientss are in the center of all our traning courses.{" "}
            </p>
            <button className="cta-button-white">BE A MODEL PATIENT</button>{" "}
          </div>
        </div>
        <div className="d-flex justify-content-around bg-white p-60">
          <div className="discount d-flex flex-column">
            <p className="blue-font">Up to 70% discount on the usual price</p>
            <button className="cta-button-blue w-50">BE A MODEL PATIENT</button>
          </div>
          <div className="w-400 font-16">
            You can be sure that your treatment with us will be safe, effective
            and adherent to the highest off standards. Interface Aesthetics is
            recognised by the two leading providers of cosmetic insurance in the
            UK, and all training is in line with best practice as specified with
            the GMC. We are also recognised as a training course by Allergan,
            the pharmaceutical industry leader in aesthetics, and greater of the
            leading products currently in use. Our course exclusively uses
            Botox(R) and Juvederm(R) ranges produced by Allergan, giving you
            extra peace of mind.
          </div>
        </div>
        <div className="d-flex justify-content-around p-60">
          <div className="discount d-flex flex-column">
            <div>
              <img src={mark} />
              <span className="blue-font">Model FAQ</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              iaculis turpis dictum felis accumsan, semper bibendum neque
              pellentesque. Proin eget porta risus. Maecenas purus justo,
              eleifend vitae sagittis non, porta gravida urna. Curabitur ut enim
              placerat, facilisis nulla et, volutpat ex.
            </p>
            <button className="cta-button-blue w-75">BE A MODEL PATIENT</button>
          </div>
          <Accordion isActive={this.state.isActive} onClick={this.onClick} />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Model);
