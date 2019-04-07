import React from "react";
import { withRouter } from "react-router-dom";
// import james from "../assets/james.jpeg";
export class About extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="gradiant-div"> </div>
        <div className="text-center p-5 m-5 position-absolute bg-white">
          <div className="text-center">
            {/* <img className="w-25 mb-4" src={james} alt="James Olding" /> */}
          </div>
          <p className="font-22 mb-1">Dr James Olding</p>
          <p className="font-16 text-secondary font-weight-bold">
            Founder & CEO
          </p>
          <div className="font-18 mb-1 text-left">
            <p>
              James is a GMC-registered surgical doctor, training in Oral &
              Maxillofacial Surgery.
            </p>
            <p>
              He is a Member of The Royal College of Surgeons of England. He has
              built on his passion for facial surgery and aesthetics through
              developing non-surgical aesthetic training courses that meet the
              needs of tomorrow's practitioners.{" "}
            </p>
            <p>
              Dr James graduated with MBChB with honours from the University of
              Bristol Medical School in 2012, as well as obtaining a BSc
              (Honours) in Medical Law and Ethics. As part of ongoing training
              in Maxillofacial Surgery, Dr James is currently working towards
              dual qualification through studying Dentistry at King's College
              London.{" "}
            </p>
            <p>
              Dr James bases training on the two pillars of competent practice
              in healthcare; knowledge and skills. The formula is simple: With
              sufficient knowledge it is possible to develop practical skills,
              and with sufficient hands-on experience it is possible to develop
              competency in a skill. Building upon his extensive training in
              medicine, surgery and dentistry, Dr James places detailed
              knowledge of head, neck and facial anatomy at the heart of
              aesthetic training. Trainees will learn how to safely identify
              anatomical landmarks for injection, deepen their understanding of
              neurovascular anatomy, and study contemporary principles of facial
              aesthetics. On a strong foundation of knowledge, practical
              experience is fundamental to the development of skill competency.
              This is the case regardless of the area of practice; from taking
              blood, to preforming a surgical procedure, to delivering a
              non-surgical aesthetic treatment.
            </p>
            <p>
              Dr James founded Interface Aesthetics in order to create training
              courses with hands-on practical experience at the heart of
              teaching. His experiences as an NHS doctor and as an independent
              aesthetic practitioner underlined the importance of learning while
              doing, and through doing, becoming confident and competent.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
