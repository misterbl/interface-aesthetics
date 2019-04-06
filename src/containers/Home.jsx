import React from "react";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import play from "../assets/Play.svg";
import Accreditations from "../components/Accreditations";
import WhoWeTrain from "../components/WhoWeTrain";
import BlueFooter from "../components/BlueFooter";

export class Home extends React.Component {
  state = { isPlaying: false };

  playVideo = () => {
    console.log("playing");
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  render() {
    const { isPlaying } = this.state;
    console.log(isPlaying);

    return (
      <React.Fragment>
        <div className="home-bg-blue">
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
        <div className="d-flex justify-content-around p-60">
          <div className="d-flex flex-column w-50">
            <p className="blue-font w-75">
              Interface Aesthetics is leading innovation in non-surgical
              aesthetic training
            </p>

            <div className="font-16">
              <p>
                High quality training is fundamental to safe and successful
                aesthetic practice. Our Foundation and Advanced courses are
                designed to provide unrivalled levels of hands-on injecting with
                model patients. Teaching is surgeon-led, in small groups and
                firmly grounded in anatomy.
              </p>
            </div>
          </div>
          <div className="no-hover">
            {this.state.isPlaying ? (
              <div onClick={this.playVideo} className="player-overlay" />
            ) : (
              <img onClick={this.playVideo} src={play} alt="play" />
            )}
            <ReactPlayer
              url="https:www.youtube.com/embed/-SFcIUEvNOQ?&mute=1&enablejsapi=0&cc_load_policy=0&fs=0&controls=0&playlist=-SFcIUEvNOQ&disablekb=1&modestbranding=1&showinfo=0&iv_load_policy=3&loop=1&showsearch=0&rel=0"
              playing={isPlaying}
              width="350px"
              controls={false}
            />
          </div>
        </div>
        <Accreditations />
        <WhoWeTrain />
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
