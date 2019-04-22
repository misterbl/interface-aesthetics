import React from "react";
import TitleWithMark from "./TitleWithMark";
import BluePhotoContainer from "./BluePhotoContainer";
import testimonials from "../data/testimonials";

const TestimonialCard = () => (
  <BluePhotoContainer
    container="d-block testimonial testimonial__photo testimonial block"
    header="testimonial testimonial__container"
  >
    <div className="d-flex text-white">
      <div className="mt-5">
        <TitleWithMark text="Testimonials" color="blue-font text-white" />
        <p>
          Don’t take our word for it, lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In congue, neque at dignissim condimentum, metus nisl
          luctus lectus, et consequat.
        </p>
      </div>
      <div
        id="testimonial-indicator"
        className="carousel slide position-relative"
        data-ride="testimonial-carousel"
        touch="true"
      >
        <ol className="carousel-indicators d-md-none">
          <li
            data-target="#testimonial-indicator"
            data-slide-to="0"
            className="active border-0"
          />
          <li
            data-target="#testimonial-indicator"
            data-slide-to="1"
            className="border-0"
          />
          <li
            data-target="#testimonial-indicator"
            data-slide-to="2"
            className="border-0"
          />
        </ol>

        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item ${index === 0 &&
                "active"} text-white p-5`}
              key={testimonial.name}
              data-interval="1000"
            >
              <p className="text-white blue-font">{testimonial.name}</p>
              <p>{testimonial.text}</p>
              <p className="text-primary">Attended: {testimonial.course}</p>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev d-none d-md-block"
          href="#testimonial-indicator"
          role="button"
          data-slide="prev"
        >
          <div className="carousel-prev-icon">
            <div aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </div>
        </a>
        <a
          className="carousel-control-next d-none d-md-block"
          href="#testimonial-indicator"
          role="button"
          data-slide="next"
        >
          <div className="carousel-next-icon">
            <div aria-hidden="true" />
            <span className="sr-only">Next</span>
          </div>
        </a>
      </div>
    </div>
  </BluePhotoContainer>
);

export default TestimonialCard;
