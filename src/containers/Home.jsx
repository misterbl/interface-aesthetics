import React from "react";
import { withRouter } from "react-router-dom";
import homeCarousel from "../data/homeCarousel";
import testimonials from "../data/testimonials";
import Accreditations from "../components/Accreditations";
import WhoWeTrain from "../components/WhoWeTrain";
import UpcomingCourses from "../components/UpcomingCourses";
import TitleWithMark from "../components/TitleWithMark";
import tearThroughModel from "../assets/model/tear_through_filler_model.jpg";
import ROUTES from "../const/routes";
import WhyCard from "../components/WhyCard";
import becomeAModelUsps from "../data/become-a-model-usps";
import charity from "../assets/charity.jpg";
import BlogList from "../components/BlogList";
import blogList from "../data/blogList";
import { getAllCourses } from "../../functions/firebase-database";

export class Home extends React.Component {
  state = { courses: undefined };

  async componentDidMount() {
    const courses = await getAllCourses();
    this.setState({ courses });
  }

  pushToModelForm = () => {
    this.props.history.push(ROUTES.BECOME_A_MODEL);
  };

  pushToBookCourse = () => {
    this.props.history.push(ROUTES.BOOK_A_COURSE);
  };
  render() {
    const threeArticles = blogList.slice(0, 3);

    return (
      <main className="text-center text-md-left">
        <div
          id="home-header-carousel"
          className="carousel slide position-relative"
          data-ride="carousel"
          touch="true"
        >
          <div className="carousel-inner">
            {homeCarousel.map((item, index) => (
              <header
                key={item.title}
                className={`carousel-item ${index === 0 && "active"}`}
              >
                <div className="text-center">
                  <h4 className="m-0">{item.title}</h4>
                  <h2 className="m-0 d-none d-sm-block">{item.text}</h2>
                </div>
                <img
                  src={item.image}
                  className="d-block w-100"
                  alt={item.title}
                />
              </header>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#home-header-carousel"
            role="button"
            data-slide="prev"
          >
            <div className="carousel-prev-icon bg-white">
              <div aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#home-header-carousel"
            role="button"
            data-slide="next"
          >
            <div className="carousel-next-icon bg-white">
              <div aria-hidden="true" />
              <span className="sr-only">Next</span>
            </div>
          </a>
        </div>
        <div className="p-60">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex flex-column w-50-container pr-3">
              <h4 className="blue-font w-75-md">
                Interface Aesthetics is leading innovation in non-surgical
                aesthetic training
              </h4>
              <p>
                High quality training is fundamental to safe and successful
                aesthetic practice. Our Botox ® and Dermal Filler courses are
                designed to provide unrivalled levels of hands-on injecting with
                model patients. Teaching is surgeon-led, in small groups and
                firmly grounded in anatomy.
              </p>

              <p>
                <span className="blue-font">${`Beginner `}</span>– Foundation
                Course in Botox ® and Dermal Filler
              </p>
              <p>
                <span className="blue-font">${`Advanced `}</span>- Advanced
                Course in Botox ® and Dermal Filler Perfect
              </p>
              <p>
                <span className="blue-font">${`Masterclass `}</span>- Courses in
                Lip Augmentation, Tear Trough & Facial Harmonization
              </p>

              <p>
                The demand for Botox ® and Dermal Filler treatments continues to
                grow rapidly. This is a unique area within healthcare which
                presents professional and financial opportunities. Working as an
                aesthetic practitioner can complement full-time healthcare work,
                or it can become a new full-time career with greater autonomy
                and exciting new challenges. We have trained doctors, dentists
                and nurses from diverse backgrounds. Our training is exclusively
                for qualified healthcare professionals. We are well placed to
                guide our delegates through both the practical the logistical
                aspects of become an independent and competent aesthetic
                practitioner.
              </p>
            </div>
            <div className="w-50-container">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Finterfaceaesthetics.co.uk%2Fvideos%2F430225077804662%2F&show_text=0&width=560"
                width="100%"
                height="400px"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowtransparency={true}
                allowFullScreen={true}
              />
            </div>
          </div>
          <div>
            <Accreditations className="mt-5" />
            <WhoWeTrain className="mt-5" />
            <UpcomingCourses
              courses={this.state.courses}
              onClick={this.pushToBookCourse}
            />
            <TitleWithMark text="Testimonials" className="mt-5" />
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="bg-white my-5 p-60">
                <p className="blue-font">{testimonial.name}</p>
                <p>{testimonial.text}</p>
                <p className="text-primary">
                  Attended: {` ${testimonial.course}`}
                </p>
              </div>
            ))}
            <div className="d-flex flex-wrap flex-lg-nowrap my-5">
              <div className="become-model">
                <TitleWithMark text="Become a model" />
                <h4>
                  Aesthetic treatments carried out by healthcare professionals
                  under expert supervision.
                </h4>
                <button className="my-4" onClick={this.pushToModelForm}>
                  MODEL FOR US
                </button>
                <img
                  src={tearThroughModel}
                  alt="model for us and receive cheap Aesthetic treatments"
                  className="d-block w-75 mb-5"
                />
              </div>
              <div className="become-model-usp">
                {becomeAModelUsps.map(usp => (
                  <WhyCard key={usp} text={usp} small />
                ))}
              </div>
            </div>
            {/* <div className="d-flex pt-0 flex-wrap flex-lg-nowrap my-5">
              <div className="w-50-container">
                <img
                  className="w-100"
                  src={charity}
                  alt="charity and interface aesthetics"
                />
              </div>
              <div className="ml-5 w-50-container mt-3">
                <h4 className="blue-font">Charity heading goes here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur elit felis, consectetur elementum consequat eget,
                  ornare interdum augue. Morbi imperdiet a felis eget efficitur.
                </p>
                <p>
                  Integer ullamcorper nisl ligula, ut imperdiet erat efficitur
                  sed. Curabitur vitae ante nec sapien gravida finibus. Etiam
                  dapibus ex a vehicula sodales. Aliquam sed lacinia neque, a
                  porta risus.
                </p>
              </div>
            </div> */}
          </div>
          <BlogList blogList={threeArticles} />
        </div>
      </main>
      // {/* <div className="no-hover">
      //   <iframe
      //     id="existing-iframe-example"
      //     width="640"
      //     height="360"
      //     src="https://www.youtube.com/embed/-SFcIUEvNOQ?&mute=1&enablejsapi=0&cc_load_policy=0&fs=0&controls=0&autoplay=1&&playlist=-SFcIUEvNOQ&disablekb=1&modestbranding=1&showinfo=0&iv_load_policy=3&loop=1&showsearch=0&rel=0"
      //     frameBorder="0"
      //   />
      // </div> */}
    );
  }
}

export default withRouter(Home);
