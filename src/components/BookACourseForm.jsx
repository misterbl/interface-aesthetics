import React, { PureComponent } from "react";
import axios from "axios";
import BluePhotoContainer from "./BluePhotoContainer";
import modelContactReason from "../data/modelContactReason";
import { getAllCourses } from "../../functions/firebase-database";
import formattedDate from "../utils/formattedDate";

export default class BookACourseForm extends PureComponent {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
    courses: undefined
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
      buttonText: "Message Sent"
    });
  };

  formSubmit = e => {
    const { name, email, phoneNumber, course } = this.state;
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = { name, email, phoneNumber, reason: `course: ${course}` };

    axios
      .post("http://localhost:5000/email", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };
  render() {
    const { name, email, phoneNumber, courses } = this.state;
    return (
      <main>
        <BluePhotoContainer container="become-a-model" header="model-form">
          <p>INTERFACE AESTHETICS</p>
          <p>BOOK A COURSE</p>
          <div className="model-form-container">
            <h3>Fill out the form below and we’ll be in touch shortly</h3>
            <form onSubmit={this.formSubmit}>
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
                      <option selected>
                        What course are you interested in?
                      </option>
                      {courses &&
                        courses.map(course => {
                          return course.dates.map(date => (
                            <option key={`${course.title}-${date.date}`}>{`${
                              course.title
                            } on the: ${formattedDate(date.date)}`}</option>
                          ));
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <button className="mt-5" type="submit">
                SEND
              </button>
            </form>
          </div>
        </BluePhotoContainer>
      </main>
    );
  }
}
