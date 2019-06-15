import React from "react";
import { withRouter } from "react-router-dom";
import Accordion from "../components/Accordion";
import ModelCard from "../components/ModelCard";
import modelCards from "../data/modelCards";
import ROUTES from "../const/routes";
import TitleWithMark from "../components/TitleWithMark";
import modelTestimonials from "../data/modelTestimonials";
import modelFaq from "../data/modelFaq";
import modelImage from "../assets/model_page_lead_photo.png";

export class Model extends React.PureComponent {
  pushToModelForm = () => {
    this.props.history.push(ROUTES.BECOME_A_MODEL);
  };
  showModelCards = () => (
    <div className="d-flex flex-wrap justify-content-center ml-5">
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
        <header>
          <div className="text-center">
            <h4 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h4>
            <h2 className="m-0">BECOME A MODEL PATIENT</h2>
            <button
              className="cta-button-white mt5 d-none d-md-inline"
              onClick={this.pushToModelForm}
            >
              BE A MODEL PATIENT
            </button>
          </div>
          <img
            src={modelImage}
            className="d-block w-100"
            alt="become a model"
          />
        </header>
        <div className="d-flex flex-wrap flex-lg-nowrap grey-mark-background p-60">
          <div className="w-50-container d-flex flex-column">
            <h4 className="blue-font w-75 font-weight-bold">
              Up to 70% discount on the usual price
            </h4>
            <button
              onClick={this.pushToModelForm}
              className="cta-button-blue w-50 mb-5"
            >
              BE A MODEL PATIENT
            </button>
          </div>
          <div className="w-50-container">
            <p>
              Model patients are in the center of all our training courses. You
              can have the opportunity to undergo the aesthetic treatment(s) of
              your choice for up to 70% discount rate. All treatments are
              carried out by qualified healthcare professionals under expert
              supervision of our surgeons and doctors.​
            </p>
            <p>
              You can be sure that your treatment with us will be safe,
              effective and adherent to the highest of standards. Interface
              Aesthetics is accredited by the two leading providers of cosmetic
              insurance in the UK, and all training is in line with best
              practice as specified by the GMC.
            </p>
            <p>
              We are also recognised as an approved training course by Allergan,
              the industry leader in aesthetics. Allergan are the creators of
              Botox ® and Juvederm ®, and at Interface Aesthetics we exclusively
              use these recognisable and renowned products for your treatments."
            </p>
          </div>
        </div>
        <div className="p-60">
          {this.showModelCards()}
          <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between">
            <div className="w-50-container d-flex flex-column pr-5">
              <div>
                <TitleWithMark text="Model FAQ" />
              </div>
              <p className="my-3">
                "The decision to have any aesthetic treatment requires careful
                consideration, and this is no different for our models. We would
                love to hear from you to find out more about you, what
                treatments you are considering and if you could join our growing
                cohort of Interface models. Our team will be happy to answer any
                specific questions you may have, while most general information
                can be found here in our FAQ section. Feedback from our models
                is excellent; this refers to both the experience on the day as
                well as the results from the treatments carried out. But don't
                just take our word for it..."
              </p>
              <button className="cta-button-blue w-50 mb-5">
                BE A MODEL PATIENT
              </button>
            </div>
            <Accordion className="w-50-container" data={modelFaq} />
          </div>
          <br />
          <TitleWithMark text="Testimonials" />
          {modelTestimonials.map(testimonial => (
            <div key={testimonial.name} className="bg-white my-5 p-60">
              <p className="blue-font">{testimonial.name}</p>
              <p>{testimonial.text}</p>
              <p className="text-primary">
                Attended: {` ${testimonial.course}`}
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default withRouter(Model);
