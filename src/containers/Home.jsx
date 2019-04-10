import React from "react";
import { withRouter } from "react-router-dom";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import Accreditations from "../components/Accreditations";
import WhoWeTrain from "../components/WhoWeTrain";
import BlueFooter from "../components/BlueFooter";
import VideoPlayer from "../components/VideoPlayer";
import UpcomingCourses from "../components/UpcomingCourses";
import TitleWithMark from "../components/TitleWithMark";
import becomeAModel from "../assets/become_a_model_home_page.jpg";
import ROUTES from "../const/routes";
import WhyCard from "../components/WhyCard";
import becomeAModelUsps from "../data/become-a-model-usps";
import BlogCard from "../components/BlogCard";
import templeFiller from "../assets/temple_filler_model.jpg";
import charity from "../assets/charity.jpg";

export class Home extends React.Component {
  pushToModelForm = () => {
    this.props.history.push(ROUTES.BECOME_A_MODEL);
  };
  render() {
    return (
      <React.Fragment>
        <div className="home-bg-blue d-none d-md-block">
          <div
            id="carouselExampleIndicators"
            className="carousel slide position-relative"
            data-ride="carousel"
          >
            {/* <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              <li data-target="#carouselExampleIndicators" data-slide-to="3" />
            </ol> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div>
                  <p>WELCOME TO INTERFACE AESTHETICS</p>
                  <p>
                    Innovative training in non-surgical aesthetics for healthcre
                    profesionals.
                  </p>
                </div>
                <img src={home1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div>
                  <p>SURGICALLY INSPIRED THEORETICAL TEACHING</p>
                  <p>Emphasis on anatomy and safety</p>
                </div>
                <img src={home2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div>
                  <p>BECOME A COMPETENT AESTHETIC PRACTITIONER</p>
                  <p>Unrivalled level of practical training on live models”</p>
                </div>
                <img src={home3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div>
                  <p>
                    GUARANTEED SMALL GROUP TEACHING TO MAXIMISE YOUR HANDS-ON
                    TRAINING
                  </p>
                  <p>Direct observation and expert feedback on injecting”</p>
                </div>
                <img src={home4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <div className="carousel-prev-icon">
                <div aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </div>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
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
        <div className="d-flex justify-content-around p-60 flex-wrap flex-lg-nowrap">
          <div className="d-flex flex-column w-50">
            <p className="blue-font w-75">
              Interface Aesthetics is leading innovation in non-surgical
              aesthetic training
            </p>
            <p className="font-16">
              High quality training is fundamental to safe and successful
              aesthetic practice. Our Foundation and Advanced courses are
              designed to provide unrivalled levels of hands-on injecting with
              model patients. Teaching is surgeon-led, in small groups and
              firmly grounded in anatomy.
            </p>
          </div>
          <VideoPlayer videoUrl="https:www.youtube.com/embed/-SFcIUEvNOQ?&mute=1&enablejsapi=0&cc_load_policy=0&fs=0&controls=0&playlist=-SFcIUEvNOQ&disablekb=1&modestbranding=1&showinfo=0&iv_load_policy=3&loop=1&showsearch=0&rel=0" />
        </div>
        <Accreditations />
        <WhoWeTrain />
        <UpcomingCourses />
        <div className="d-flex p-60 side-margin flex-wrap flex-lg-nowrap">
          <div className="w-75">
            <TitleWithMark text="Become a model" />
            <p className="font-16">
              Aesthetic treatments carried out by healthcare professionals under
              expert supervision.
            </p>
            <button className="my-4" onClick={this.pushToModelForm}>
              MODEL FOR US
            </button>
            <img
              src={becomeAModel}
              alt="model for us and receive cheap Aesthetic treatments"
              className="d-block w-75 mb-5"
            />
          </div>
          <div className="home-become-model">
            {becomeAModelUsps.map(usp => (
              <WhyCard text={usp} small />
            ))}
          </div>
        </div>
        <div className="p-60 side-margin">
          <TitleWithMark text="Interface Aethestics in focus" />
          <div className="d-flex flex-wrap">
            <BlogCard
              className="m-5"
              image={templeFiller}
              title="Blog Title Goes Here"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet purus eget lectus gravida, vel mattis magna placerat…"
              id={1}
            />
            <BlogCard
              className="m-5"
              image={templeFiller}
              title="Blog Title Goes Here"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet purus eget lectus gravida, vel mattis magna placerat…"
              id={1}
            />
            <BlogCard
              className="m-5"
              image={templeFiller}
              title="Blog Title Goes Here"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet purus eget lectus gravida, vel mattis magna placerat…"
              id={1}
            />
          </div>
        </div>
        <div className="d-flex p-60 side-margin pt-0 flex-wrap flex-lg-nowrap">
          <img
            className="charity-img"
            src={charity}
            alt="charity and interface aesthetics"
          />
          <div className="ml-5">
            <p className="blue-font">Charity heading goes here</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              elit felis, consectetur elementum consequat eget, ornare interdum
              augue. Morbi imperdiet a felis eget efficitur.
            </p>
            <p>
              Integer ullamcorper nisl ligula, ut imperdiet erat efficitur sed.
              Curabitur vitae ante nec sapien gravida finibus. Etiam dapibus ex
              a vehicula sodales. Aliquam sed lacinia neque, a porta risus.
            </p>
          </div>
        </div>
        <BlueFooter />
      </React.Fragment>
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
