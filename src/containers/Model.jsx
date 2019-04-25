import React from "react";
import { withRouter } from "react-router-dom";
import Accordion from "../components/Accordion";
import ModelCard from "../components/ModelCard";
import modelCards from "../data/modelCards";
import ROUTES from "../const/routes";
import BluePhotoContainer from "../components/BluePhotoContainer";
import TitleWithMark from "../components/TitleWithMark";
import TestimonialCard from "../components/TestimonialCard";
import testimonialsFaq from "../data/testimonialsFaq";
export class Model extends React.PureComponent {
  pushToModelForm = () => {
    this.props.history.push(ROUTES.BECOME_A_MODEL);
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
            key={title}
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
      <main className="model-page">
        <BluePhotoContainer container="model-photo" header="model-header">
          <p>INTERFACE AESTHETICS</p>
          <p>BECOME A MODEL PATIENT</p>
          <p>
            Model patientss are in the center of all our traning courses. Model
            patientss are in the center of all our traning courses. Model
            patientss are in the center of all our traning courses. Model
            patientss are in the center of all our traning courses. Model
            patientss are in the center of all our traning courses.{" "}
          </p>
          <button className="cta-button-white" onClick={this.pushToModelForm}>
            BE A MODEL PATIENT
          </button>
        </BluePhotoContainer>
        <div className="d-flex flex-wrap flex-lg-nowrap grey-mark-background p-60">
          <div className="discount d-flex flex-column">
            <p className="blue-font w-75">
              Up to 70% discount on the usual price
            </p>
            <button
              onClick={this.pushToModelForm}
              className="cta-button-blue w-50 mb-5"
            >
              BE A MODEL PATIENT
            </button>
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
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between p-60">
          <div className="discount d-flex flex-column">
            <div>
              <TitleWithMark text="Model FAQ" />
            </div>
            <p className="font-16 my-3">
              "The decision to have any aesthetic treatment requires careful
              consideration, and this is no different for our models. We would
              love to hear from you to find out more about you, what treatments
              you are considering and if you could join our growing cohort of
              Interface models. Our team will be happy to answer any specific
              questions you may have, while most general information can be
              found here in our FAQ section. Feedback from our models is
              excellent; this refers to both the experience on the day as well
              as the results from the treatments carried out. But don't just
              take our word for it..."
            </p>
            <button className="cta-button-blue w-50 mb-5">
              BE A MODEL PATIENT
            </button>
          </div>
          <Accordion data={testimonialsFaq} />
        </div>
        <TestimonialCard />
      </main>
    );
  }
}

export default withRouter(Model);
