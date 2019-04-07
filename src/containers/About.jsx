import React from "react";
import { withRouter } from "react-router-dom";
import BluePhotoContainer from "../components/BluePhotoContainer";
import mark from "../assets/Mark.svg";
import james from "../assets/james_olding.jpg";
import WhyTrain from "../components/WhyTrain";
import PhotoGallery from "../components/PhotoGallery";
export class About extends React.Component {
  render() {
    return (
      <main className="about-page">
        <BluePhotoContainer container="group-photo" header="about-header">
          <p>
            Interface is a surgeon-led aesthetic training academy with
            innovation at its core.
          </p>
        </BluePhotoContainer>
        <div className="position-relative my-5">
          <div className="about-founder">
            <img src={mark} />
            <span className="blue-font">About The Founder</span>
            <p>
              Dr James Olding is a GMC-registered surgical doctor, training in
              Oral & Maxillofacial Surgery. He is a Member of The Royal College
              of Surgeons of England. He has built on his passion for facial
              surgery and aesthetics through developing non-surgical aesthetic
              training courses that meet the needs of tomorrow's practitioners.
              Dr James graduated with MBChB with honours from the University of
              Bristol Medical School in 2012, as well as obtaining a BSc
              (Honours) in Medical Law and Ethics. As part of ongoing training
              in Maxillofacial Surgery, Dr James is currently working towards
              dual qualification through studying Dentistry at King's College
              London. Dr James bases training on the two pillars of competent
              practice in healthcare; knowledge and skills. The formula is
              simple: With sufficient knowledge it is possible to develop
              practical skills, and with sufficient hands-on experience it is
              possible to develop competency in a skill. Building upon his
              extensive training in medicine, surgery and dentistry, Dr James
              places detailed knowledge of head, neck and facial anatomy at the
              heart of aesthetic training. He has multiple publications in the
              area of facial surgery, and has a special interest in facial
              trauma.
            </p>
          </div>
          <img
            className="about-founder-image"
            src={james}
            alt="James Olding, founder and trainer at Interface Aesthetics"
          />
        </div>
        <PhotoGallery />
        <WhyTrain />
      </main>
    );
  }
}

export default withRouter(About);
