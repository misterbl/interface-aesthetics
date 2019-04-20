import React from "react";
import { withRouter } from "react-router-dom";
import BluePhotoContainer from "../components/BluePhotoContainer";
import james from "../assets/james_olding.jpg";
import WhyTrain from "../components/WhyTrain";
import PhotoGallery from "../components/PhotoGallery";
import TitleWithMark from "../components/TitleWithMark";
import VideoPlayer from "../components/VideoPlayer";
import ROUTES from "../const/routes";
import WhyChoose from "../components/WhyChoose";
import Accreditations from "../components/Accreditations";
export class About extends React.Component {
  pushToCourses = () => {
    this.props.history.push(ROUTES.COURSES);
  };
  render() {
    return (
      <main className="about-page">
        <BluePhotoContainer container="group-photo" header="about-header">
          <p>INTERFACE AESTHETICS</p>
          <p>ABOUT US</p>
          <p>
            Interface Aesthetics is a surgeon-led training academy (Smaller)
            Small-Groups and hands-on training are at the core of our
            philosophy. Our courses are accredited by the two leading insurers
            of cosmetic practice in the UK, The CPD Accreditation Service, and
            the pharmaceutical industry leader in aesthetics, Allergan.
          </p>
        </BluePhotoContainer>
        <div className="d-flex justify-content-around">
          <div className="grey-mark-background ">
            <p className="blue-font">
              Our courses have been developed to provide the greatest possible
              exposure to real patients
            </p>
            <button className="w-50" onClick={this.pushToCourses}>
              VIEW COURSES
            </button>
          </div>
          <div>
            <VideoPlayer videoUrl="https:www.youtube.com/embed/-SFcIUEvNOQ?&mute=1&enablejsapi=0&cc_load_policy=0&fs=0&controls=0&playlist=-SFcIUEvNOQ&disablekb=1&modestbranding=1&showinfo=0&iv_load_policy=3&loop=1&showsearch=0&rel=0" />
          </div>
        </div>
        <WhyChoose />
        <Accreditations />
        <div className="about-founder p-60">
          <img
            src={james}
            alt="James Olding, founder and trainer at Interface Aesthetics"
          />
          <div className="ml-5">
            <TitleWithMark text="About The Founder" />
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
        </div>
        <div className="why-container">
          <TitleWithMark text="Who we train" />
          <div className="d-flex flex-wrap flex-lg-nowrap">
            <p className="blue-font-md">
              If you are a doctor, dentist or nurse interested in training in
              medical aesthetics, Interface has the courses to equip you with
              the knowledge and skills to achieve confidence and competence in
              this exciting and dynamic field.
            </p>
            <div className="ml-5">
              <p className="font-18">
                Interface courses are designed for registered healthcare
                professionals, and require a background understanding of key
                healthcare principles and clinical skills. Our courses are
                suitable for:
              </p>
              <ul>
                <li>Doctors registered with the GMC</li>
                <li>Dentists registered with the GDC</li>
                <li>Nurses and Midwives registered with the NMC</li>
                <li>
                  Overseas healthcare professionals – registered with
                  appropriate governing body in country of practice.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <PhotoGallery />
        <WhyTrain className="mt-5" />
        <div className="d-flex why-container flex-wrap flex-lg-nowrap">
          <div className="w-75 mr-5">
            <TitleWithMark text="Hugely rewarding in all senses" />
            <p className="font-18">
              A career in medical aesthetics can be hugely rewarding in all
              senses. It is a rapidly growing area, with continuous advances in
              techniques and technology. To be at the forefront of such an area
              is hugely exciting. Non-surgical cosmetic treatments are rapidly
              becoming the new normal, and wide and diverse demographic groups
              now seek aesthetic treatment to manage the signs of ageing and
              enhance natural features.
            </p>
            <p className="font-18">
              Being successful in aesthetics can be extremely lucrative; all
              work is private, and your skills will be evermore in demand in
              line with the expansion of the aesthetic medicine field.
            </p>
          </div>
          <div>
            <TitleWithMark text="Make a change" />
            <button className="w-100">Book a course today</button>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(About);
