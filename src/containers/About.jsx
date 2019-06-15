import React from "react";
import { withRouter } from "react-router-dom";
import BluePhotoContainer from "../components/BluePhotoContainer";
import james from "../assets/james_olding.jpg";
import WhyTrain from "../components/WhyTrain";
import PhotoGallery from "../components/PhotoGallery";
import testimonialsFaq from "../data/testimonialsFaq";
import TitleWithMark from "../components/TitleWithMark";
import Accordion from "../components/Accordion";
import groupPhoto from "../assets/group_photo.png";
import ROUTES from "../const/routes";
import WhyChoose from "../components/WhyChoose";
import Accreditations from "../components/Accreditations";
import carousel5 from "../assets/Carousel_5.jpg";
import carousel6 from "../assets/Carousel_6.jpg";
import carousel7 from "../assets/Carousel_7.jpg";
import carousel8 from "../assets/Carousel_8.jpg";
export class About extends React.Component {
  pushToCourses = () => {
    this.props.history.push(ROUTES.COURSES);
  };

  pushToBookCourse = () => {
    this.props.history.push(ROUTES.BOOK_A_COURSE);
  };
  render() {
    return (
      <main className="about-page">
        <header>
          <div className="text-center">
            <h4 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h4>
            <h2 className="m-0">ABOUT US</h2>
          </div>
          <img
            src={groupPhoto}
            className="d-block w-100"
            alt="about interface aesthetics"
          />
        </header>
        <div className="p-60">
          <div className="d-flex justify-content-between">
            <div className="w-50-container mb-5">
              <h4 className="blue-font">
                Our courses have been developed to provide the greatest possible
                exposure to real patients
              </h4>
              <p>
                Interface Aesthetics has a proven track record of getting our
                delegates into independent practice. Working with the industry
                leaders, and ensuring all training is hands-on and practically
                oriented, our delegates have the confidence to start independent
                work immediately after our courses. All teaching is firmly
                grounded in anatomy, and delivered by doctors with backgrounds
                in head & neck surgery and aesthetics.
              </p>
              <p>
                We exclusively train healthcare professionals, and as such we
                are able to provide a level of training commensurate with the
                healthcare qualifications and experience of our delegates.
                Learning in this way allows the course to move faster, ensuring
                delegates are pushed, while maintaining a supportive training
                environment. From the outset, tuition is patient-focused, with
                an emphasis on putting into action the theory behind safe and
                successful aesthetic practice.
              </p>
              <button className="w-50" onClick={this.pushToCourses}>
                VIEW COURSES
              </button>
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
          <WhyChoose className="mt-5" />
          <Accreditations />
          <div className="about-founder text-center mt-5">
            <div className="about-founder about-founder__photo d-none d-md-block" />
            <div className="mx-5">
              <TitleWithMark text="About The Founder" />
              <p>
                Dr James Olding is a GMC-registered surgical doctor, training in
                Oral & Maxillofacial Surgery. He is a Member of The Royal
                College of Surgeons of England. He has built on his passion for
                facial surgery and aesthetics through developing non-surgical
                aesthetic training courses that meet the needs of tomorrow's
                practitioners. Dr James graduated with MBChB with honours from
                the University of Bristol Medical School in 2012, as well as
                obtaining a BSc (Honours) in Medical Law and Ethics. As part of
                ongoing training in Maxillofacial Surgery, Dr James is currently
                working towards dual qualification through studying Dentistry at
                King's College London. Dr James bases training on the two
                pillars of competent practice in healthcare; knowledge and
                skills. The formula is simple: With sufficient knowledge it is
                possible to develop practical skills, and with sufficient
                hands-on experience it is possible to develop competency in a
                skill. Building upon his extensive training in medicine, surgery
                and dentistry, Dr James places detailed knowledge of head, neck
                and facial anatomy at the heart of aesthetic training. He has
                multiple publications in the area of facial surgery, and has a
                special interest in facial trauma.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <TitleWithMark text="Who we train" />
            <div className="d-flex flex-wrap flex-lg-nowrap">
              <div className="w-50-container">
                <h5 className="blue-font pr-5 mb-3">
                  If you are a doctor, dentist or nurse interested in training
                  in medical aesthetics, Interface has the courses to equip you
                  with the knowledge and skills to achieve confidence and
                  competence in this exciting and dynamic field.
                </h5>
              </div>
              <div className="w-50-container">
                <h6 className="text-black-50 m-0">
                  Interface courses are designed for registered healthcare
                  professionals, and require a background understanding of key
                  healthcare principles and clinical skills. Our courses are
                  suitable for:
                </h6>
                <ul className="orange-dot-li">
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
          <PhotoGallery images={[carousel5, carousel6, carousel7, carousel8]} />
          <WhyTrain className="mt-5" />
          <TitleWithMark text="FAQ" />
          <Accordion data={testimonialsFaq} />
          <div className="d-flex flex-wrap flex-lg-nowrap mt-5">
            <div className="w-75 mr-5 w-100-md">
              <TitleWithMark text="Hugely rewarding in all senses" />
              <h6>
                A career in medical aesthetics can be hugely rewarding in all
                senses. It is a rapidly growing area, with continuous advances
                in techniques and technology. To be at the forefront of such an
                area is hugely exciting. Non-surgical cosmetic treatments are
                rapidly becoming the new normal, and wide and diverse
                demographic groups now seek aesthetic treatment to manage the
                signs of ageing and enhance natural features.
              </h6>
              <h6 className="mb-3">
                Being successful in aesthetics can be extremely lucrative; all
                work is private, and your skills will be evermore in demand in
                line with the expansion of the aesthetic medicine field.
              </h6>
            </div>
            <div className="w-50">
              <h2 className="blue-font font-weight-bold">Make a change</h2>
              <button onClick={this.pushToBookCourse} className="w-75">
                Book a course today
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(About);
