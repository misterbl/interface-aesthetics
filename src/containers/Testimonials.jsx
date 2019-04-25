import React from "react";
import testimonials from "../data/testimonials";
import BluePhotoContainer from "../components/BluePhotoContainer";
import testimonialsFaq from "../data/testimonialsFaq";
import TitleWithMark from "../components/TitleWithMark";
import Accordion from "../components/Accordion";

export const Testimonials = () => (
  <main>
    <BluePhotoContainer container="group-photo" header="courses-header">
      <p>INTERFACE AESTHETICS</p>
      <p>TESTIMONIALS</p>
    </BluePhotoContainer>
    <div className="block">
      {testimonials.map(testimonial => (
        <div key={testimonial.name} className="bg-white my-5 p-60">
          <p className="blue-font">{testimonial.name}</p>
          <p className="font-16">{testimonial.text}</p>
          <p className="text-primary">Attended: {` ${testimonial.course}`}</p>
        </div>
      ))}
      <TitleWithMark text="FAQ" />
      <Accordion data={testimonialsFaq} />
    </div>
  </main>
);

export default Testimonials;
