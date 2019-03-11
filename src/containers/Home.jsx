import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/routes";
import CPDMemberlogo from "../assets/CPDMemberlogo.jpeg";

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>hello</h1>
        <iframe
          id="existing-iframe-example"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/-SFcIUEvNOQ?autoplay=1&mute=1&enablejsapi=1?modestbranding=1&showinfo=0&iv_load_policy=3&loop=1&showsearch=0&rel=0"
          frameborder="0"
        />
        <div className="px-5 m-5">
          <h2 className="font-weight-bold mb-4">
            {" "}
            “Welcome to Interface Aesthetics” “Innovative aesthetic training in
            non-surgical cosmetics for healthcare professionals.”
          </h2>
          <p>
            {" "}
            Interface is a surgeon-led aesthetic training academy with
            innovation at its core.
          </p>
          Training in non-surgical cosmetic treatments should provide knowledge
          and experience, with the aim of graduates achieving a level of
          competence to independently perform all procedures taught.
          <p>
            Our courses have been developed to provide the greatest possible
            exposure to real patients, with an unrivalled amount of injecting
            and a hands-on approach to the aesthetic consultation. Practical
            training is backed up by detailed teaching on head, neck and facial
            anatomy by surgically qualified tutors with a background in Head &
            Neck Surgery. Our formula of detailed anatomical understanding
            combined with hours of injecting on live models aims to create a
            solid base of core competencies in non-surgical aesthetics that will
            enable graduates to start practising independently.{" "}
          </p>
        </div>
        <div className="interface-bg-grey">
          <h2 className="font-weight-bold">
            {" "}
            What to expect from training with Interface
          </h2>
          {/* TODO USE OUR OWN IMAGES */}
          <div className="d-flex">
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-1-150x150.png" />
              <p>Surgeon-led Training</p>
              <p>
                Teaching and feedback from a surgically-qualified faculty with a
                background in Maxillofacial Surgery
              </p>{" "}
              <p>
                Detailed Anatomical Teaching A landmark-based approach to safe
                injecting, with safe practice and effective treatment of the
                clinical problem at the fore.
              </p>
            </div>
            <div className="d-flex flex-column">
              <img src="/static/media/CPDMemberlogo.jpeg" />
              <p>CPD accredited training</p>
              <p>
                {" "}
                Our courses provide CPD points to attending delegates, with our
                two-day Foundation Course awarding 14 points
              </p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-4-3-150x150.png" />
              <p> Small Group Teaching </p>
              <p>
                Group sizes will never be greater than 4 delegates per
                trainer.Emphasis is put on each delegate individually performing
                all procedures taught.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Expert Individual Feedback</p>
            <p>
              Direct observation by trainers with extensive aesthetic
              experience, with tailored feedback on practical techniques.
            </p>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Business Start-up Advice</p>
            <p>
              Get an insight into how to start and grow an aesthetics business.
            </p>
          </div>{" "}
        </div>
        <div>
          <h2 className="font-weight-bold">
            {" "}
            Why train in medical aesthetics ?
          </h2>
          {/* TODO USE OUR OWN IMAGES */}
          <div className="d-flex">
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-1-150x150.png" />
              <p>Rapidly growing industry</p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-2-150x150.png" />
              <p>CPD accredited training</p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
              <p> Excellent potential for remuneration</p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-4-3-150x150.png" />
              <p> Professional development </p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Combine scientific and artistic aspects of practice</p>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Complement NHS work or start a new career</p>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Greater autonomy</p>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Build and grow your own business</p>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p>
              {" "}
              Can be hugely rewarding to help patients feel better about their
              appearance
            </p>
          </div>
        </div>
        <div className="interface-bg-grey">
          <h2 className="font-weight-bold"> Become a model:</h2>
          {/* TODO USE OUR OWN IMAGES */}
          <div className="d-flex">
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-1-150x150.png" />
              <p>
                Aesthetic treatments carried out by healthcare professionals
                under expert supervision
              </p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-2-150x150.png" />
              <p>
                Up to a 70% discount on the usual price of anti-wrinkle (eg.
                Botox®, Bocouture®) and Dermal Filler (Juvederm®) treatments.
              </p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
              <p> Comprehensive aesthetic consultation and assessment</p>
            </div>
            <div className="d-flex flex-column">
              <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-4-3-150x150.png" />
              <p>Choice of a wide range of procedures </p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <img src="https://www.harleyacademy.com/wp-content/uploads/2019/02/Artboard-3-150x150.png" />
            <p> Combine scientific and artistic aspects of practice</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
