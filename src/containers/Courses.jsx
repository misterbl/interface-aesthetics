import React from "react";
import { withRouter } from "react-router-dom";
import courses from "../data/courses";
import home5 from "../assets/home5.png";
import CourseCard from "../components/CourseCard";
import WhyTrain from "../components/WhyTrain";
import WhyChoose from "../components/WhyChoose";
import PhotoGallery from "../components/PhotoGallery";
import carousel1 from "../assets/Carousel_1.jpg";
import carousel2 from "../assets/Carousel_2.jpg";
import carousel3 from "../assets/Carousel_3.jpg";
import carousel4 from "../assets/Carousel_4.jpg";

export class Courses extends React.Component {
  getCourses = () => (
    <div className="d-flex flex-wrap p-60 justify-content-around">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          price={course.price}
          image={course.image}
          handleClick={() => this.props.history.push(`/course/${course.id}`)}
        />
      ))}
    </div>
  );
  render() {
    return (
      <main className="courses-page">
        <header>
          <div className="header-text">
            <h3 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h3>
            <h2 className="m-0">OUR COURSES IN BOTOX ® AND DERMAL FILLER</h2>
          </div>
          <img
            src={home5}
            className="d-block w-100"
            alt="interface aesthetics's courses"
          />
        </header>
        <div className="p-60">
          <div className="d-flex flex-wrap p-60 grey-mark-background">
            <div className="w-50-container d-flex flex-column pr-4">
              <h3 className="blue-font">
                Our courses have been developed to provide the greatest possible
                exposure to real patients
              </h3>
            </div>
            <div className="w-50-container">
              <p>
                Overall, the two-day Foundation Course for Botox® and dermal
                fillers was excellent. I am a Medical Doctor and prior to the
                course I did not have any experience in injecting Botox ® and
                dermal fillers. The course had a great balance in theory
                sessions and practical sessions (morning theory, afternoon
                practice) at a neat location. The Saturday covered Botox ® and
                the Sunday covered dermal fillers. Dr. James Olding is a great
                and knowledgeable teacher and I felt safe asking any questions.
                During the practical parts Dr. James guided me and the other
                delegates through the process. The practical part included
                plenty of hands-on for the delegates. I was lucky to have a
                group of only 3 delegates during the course and therefore I was
                very confident in my practice after the course. I really
                appreciated the inclusion of cheek fillers in this course. The
                course also included information on insurance and FAQ on how to
                set up your own business, which I successfully did after the
                course.
              </p>
              <p>Dr Lara Van De Lande</p>
              <p>Medical Doctor</p>
            </div>
          </div>
          {this.getCourses()}
          <WhyChoose />
          <PhotoGallery
            images={[carousel1, carousel2, carousel3, carousel4]}
            className="mt-5"
          />
          <WhyTrain className="mt-5" />
        </div>
      </main>
    );
  }
}

export default withRouter(Courses);
