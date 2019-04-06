import React from "react";
import { withRouter } from "react-router-dom";
import mark from "../assets/Mark.svg";
import ROUTES from "../const/routes";
import Accordion from "../components/Accordion";
import ModelCard from "../components/ModelCard";
import modelCards from "../data/modelCards";
import BlueFooter from "../components/BlueFooter";
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

  showModelCards = () => (
    <div className="model-card-container">
      {modelCards.map(card => {
        const {
          image,
          title,
          price,
          whatIsIt,
          whatDoesItInvolve,
          isThereDowntime
        } = card;
        return (
          <ModelCard
            image={image}
            title={title}
            price={price}
            whatIsIt={whatIsIt}
            whatDoesItInvolve={whatDoesItInvolve}
            isThereDowntime={isThereDowntime}
          />
        );
      })}
    </div>
  );

  render() {
    return (
      <React.Fragment>
        <div className="model-photo position-relative">
          <div className="bg-blue" />
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
            <p className="blue-font w-75">
              Up to 70% discount on the usual price
            </p>
            <button className="cta-button-blue w-50">BE A MODEL PATIENT</button>
          </div>
          <div className="w-50 font-16">
            <p>
              You can be sure that your treatment with us will be safe,
              effective and adherent to the highest off standards. Interface
              Aesthetics is recognised by the two leading providers of cosmetic
              insurance in the UK, and all training is in line with best
              practice as specified with the GMC.
            </p>
            <p>
              We are also recognised as a training course by Allergan, the
              pharmaceutical industry leader in aesthetics, and greater of the
              leading products currently in use. Our course exclusively uses
              Botox(R) and Juvederm(R) ranges produced by Allergan, giving you
              extra peace of mind.
            </p>
          </div>
        </div>
        {this.showModelCards()}
        <div className="d-flex justify-content-between p-60">
          <div className="discount d-flex flex-column">
            <div>
              <img src={mark} />
              <span className="blue-font">Model FAQ</span>
            </div>
            <p className="font-16 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              iaculis turpis dictum felis accumsan, semper bibendum neque
              pellentesque. Proin eget porta risus. Maecenas purus justo,
              eleifend vitae sagittis non, porta gravida urna. Curabitur ut enim
              placerat, facilisis nulla et, volutpat ex.
            </p>
            <button className="cta-button-blue w-50">BE A MODEL PATIENT</button>
          </div>
          <Accordion isActive={this.state.isActive} onClick={this.onClick} />
        </div>
        <BlueFooter container="model-man" />
      </React.Fragment>
    );
  }
}

export default withRouter(Model);
