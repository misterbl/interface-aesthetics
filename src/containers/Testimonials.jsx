import React from "react";
import testimonials from "../data/testimonials";
// import testimonialsFaq from "../data/testimonialsFaq";
// import TitleWithMark from "../components/TitleWithMark";
// import Accordion from "../components/Accordion";
import testimonialsImage from "../assets/testimonials.png";

export const Testimonials = () => (
  <main>
    <header>
      <div className="text-center">
        <h4 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h4>
        <h2 className="m-0">Testimonials</h2>
      </div>
      <img
        src={testimonialsImage}
        className="d-block w-100"
        alt="interface aesthetics's testimonials"
      />
    </header>
    <div className="p-60">
      {testimonials.map(testimonial => (
        <div key={testimonial.name} className="bg-white my-5 p-60">
          <p className="blue-font">{testimonial.name}</p>
          <p>{testimonial.text}</p>
          <p className="text-primary">Attended: {` ${testimonial.course}`}</p>
        </div>
      ))}
      {/* <TitleWithMark text="FAQ" />
      <Accordion data={testimonialsFaq} /> */}
    </div>
  </main>
);

export default Testimonials;
