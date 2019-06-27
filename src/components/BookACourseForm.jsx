import React, { PureComponent } from "react";
import axios from "axios";
import { getAllCourses } from "../../functions/firebase-database";
import formattedDate from "../utils/formattedDate";
import modelPhoto from "../assets/model_page_lead_photo.png";
import validateEmail from "../utils/validateEmail";

export default class BookACourseForm extends PureComponent {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
    message: "",
    sent: false,
    buttonText: "SEND",
    courses: undefined,
    validEmail: true,
    error: false
  };
  async componentDidMount() {
    const courses = await getAllCourses();
    this.setState({ courses });
  }

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "SEND",
      sent: false
    });
  };

  formSubmit = e => {
    const { name, email, phoneNumber, course } = this.state;
    e.preventDefault();

    this.setState({
      validEmail: true,
      error: false
    });

    let data = { name, email, phoneNumber, reason: `course: ${course}` };
    if (validateEmail(email)) {
      this.setState({ buttonText: "...sending" });
      axios
        .post(
          "https://interfaceaesthetics.co.uk/email",
          data
        )
        .then(res => {
          this.setState({ sent: true, buttonText: "SEND" }, this.resetForm());
        })
        .catch(() => {
          console.log("Message not sent");
          this.setState({ error: true, buttonText: "SEND" });
        });
    } else this.setState({ validEmail: false });
  };
  render() {
    const {
      name,
      email,
      phoneNumber,
      courses,
      sent,
      validEmail,
      error,
      buttonText
    } = this.state;
    return (
      <main>
        <header>
          <div className="text-center">
            <h3 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h3>
            <h2 className="m-0">Book a course</h2>
          </div>
          <img
            src={modelPhoto}
            className="d-block w-100"
            alt="interface aesthetics's courses"
          />
        </header>
        <div className="p-60">
          <h3 className="blue-font font-weight-bold">
            Fill out the form below and we’ll be in touch shortly
          </h3>
          <form onSubmit={this.formSubmit} className="mt-5">
            <div>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
              />
              <input
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                name="email"
                placeholder="Email address"
                defaultValue={email}
              />
              <input
                onChange={e => this.setState({ phoneNumber: e.target.value })}
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                defaultValue={phoneNumber}
              />
              <div>
                <div className="select-container">
                  <select
                    onChange={e => this.setState({ course: e.target.value })}
                    name="course"
                  >
                    <option selected>What course are you interested in?</option>
                    {courses &&
                      courses.map(course => {
                        return course.dates.map(date => (
                          <option key={`${course.title}-${date.date}`}>
                            {course.title}
                            {date.type && ` - ${date.type} - `}
                            {` on the: ${formattedDate(date.date)}`}
                          </option>
                        ));
                      })}
                  </select>
                </div>
              </div>
            </div>
            {sent && <div className="text-success">Message sent</div>}
            {!validEmail && (
              <div className="text-danger">Email address not valid</div>
            )}
            {error && (
              <div className="text-danger">Something went wrong, try again</div>
            )}
            <button className="mt-5" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </main>
    );
  }
}
