import React, { Component } from "react";
import TitleWithMark from "./TitleWithMark";
import formattedDate from "../utils/formattedDate";

const UpcomingCourses = ({ onClick, courses }) => (
  <div className="upcoming-courses">
    <div
      id="upcoming-courses-indicator"
      className="carousel slide position-relative"
      data-ride="upcoming-courses-carousel"
      touch="true"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#upcoming-courses-indicator"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#upcoming-courses-indicator" data-slide-to="1" />
        {/* <li data-target="#upcoming-courses-indicator" data-slide-to="2" />
          <li data-target="#upcoming-courses-indicator" data-slide-to="3" /> */}
      </ol>

      <div className="carousel-inner">
        {courses &&
          courses.map((course, index) => (
            <div
              className={`carousel-item ${index === 0 && "active"}`}
              data-interval="10000"
              key={course.title}
            >
              <div className="d-flex">
                <div className="content">
                  <TitleWithMark text="Upcoming Courses" />
                  <p className="font-22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    congue, neque at dignissim condimentum, metus nisl luctus
                    lectus, et consequat tellus justo nec augue.
                  </p>
                  <p className="blue-font mt-3 mb-2">{course.title}</p>
                  <p className="font-16">{course.overview}</p>
                  <div className="d-flex flex-wrap flex-lg-nowrap">
                    <div className="next-course w-100 p-3">
                      {`Next Course: ${formattedDate(course.dates[0].date)}`}
                    </div>
                    <div className="position-relative">
                      <button onClick={onClick}>BOOK COURSE</button>
                    </div>
                  </div>
                </div>
                <div
                  className="course-image"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
              </div>
            </div>
          ))}
      </div>
      <a
        className="carousel-control-prev d-none d-md-block"
        href="#upcoming-courses-indicator"
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
        href="#upcoming-courses-indicator"
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
);

export default UpcomingCourses;
