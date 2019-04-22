import React from "react";
import testimonials from "../data/testimonials";
import BluePhotoContainer from "../components/BluePhotoContainer";
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
    </div>
  </main>
);

export default Testimonials;
