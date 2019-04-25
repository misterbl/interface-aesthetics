import React from "react";
import DatePicker from "react-datepicker";
import {
  getAllCourses,
  updateCourses
} from "../../functions/firebase-database";

import "react-datepicker/dist/react-datepicker.css";
import TitleWithMark from "./TitleWithMark";
import formattedDate from "../utils/formattedDate";
import calendar from "../assets/calendar-blue.svg";
class CoursesAdmin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
      // startDate: new Date()
    };
  }

  async componentDidMount() {
    const courses = await getAllCourses();
    this.setState({ courses });
  }

  onUpdateCourses = courses => {
    updateCourses(courses);
    console.log("update");
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log(e.target.value);
    this.onUpdateCourses(this.state.courses);
  };

  render() {
    const { courses } = this.state;
    console.log(this.state.courses);
    return (
      <React.Fragment>
        <TitleWithMark text="Courses" />
        <p className="font-16">You can update the courses information here</p>
        <form onSubmit={this.handleSubmit}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="mb-5 w-100 p-5 bg-white text-center"
            >
              <label
                className="font-weight-bold"
                htmlFor={`${course.id}-title`}
              >
                {course.title}
              </label>
              {/* <textarea
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].title = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                id={`${course.id}-title`}
                name={`${course.id}-title`}
                type="text"
                placeholder="Title"
                defaultValue={course.title}
              /> */}
              {/* <label
                className="font-weight-bold"
                htmlFor={`${course.id}-overview`}
              >
                Overview
              </label>
              <textarea
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].overview = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                id={`${course.id}-overview`}
                name={`${course.id}-overview`}
                type="text"
                placeholder="overview"
                value={course.overview}
              />
              {course.moreInformation &&
                course.moreInformation.map((moreInfo, moreInfoIndex) => (
                  <React.Fragment>
                    <label
                      className="font-weight-bold"
                      htmlFor={`${course.id}-moreInfo`}
                    >
                      {`MoreInfo(${moreInfoIndex + 1})`}
                    </label>
                    <textarea
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].moreInformation[moreInfoIndex] =
                          e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${moreInfo}`}
                      name={`${course.id}-${moreInfo}`}
                      type="text"
                      placeholder={`moreInfo${moreInfoIndex + 1}`}
                      value={moreInfo}
                    />
                  </React.Fragment>
                ))}
              {course.information &&
                course.information.map((info, infoIndex) => (
                  <React.Fragment>
                    <label
                      className="font-weight-bold"
                      htmlFor={`${course.id}-info-overview`}
                    >
                      {`Info(${infoIndex + 1}) overview`}
                    </label>
                    <textarea
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].information[infoIndex].overview =
                          e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${info}`}
                      name={`${course.id}-${info}`}
                      type="text"
                      placeholder={`Info${infoIndex + 1} overview`}
                      value={info.overview}
                    />
                    {info.details.map((detail, detailIndex) => (
                      <React.Fragment>
                        <label
                          className="font-weight-bold"
                          htmlFor={`${course.id}-info-overview-${detailIndex +
                            1}`}
                        >
                          {`Info${infoIndex + 1} details(${detailIndex + 1})`}
                        </label>
                        <textarea
                          onChange={e => {
                            const coursesState = this.state.courses;
                            coursesState[index].information[infoIndex].details[
                              detailIndex
                            ] = e.target.value;
                            this.setState({ courses: coursesState });
                          }}
                          id={`${course.id}-${info}-${detailIndex + 1}`}
                          name={`${course.id}-${info}-${detailIndex + 1}`}
                          type="text"
                          placeholder={`Info${infoIndex +
                            1} detail${detailIndex + 1}`}
                          value={info.details[detailIndex]}
                        />
                      </React.Fragment>
                    ))}
                  </React.Fragment> */}
              {/* ))} */}
              {/* {course.days &&
                course.days.map((day, dayIndex) => (
                  <React.Fragment>
                    <label
                      className="font-weight-bold"
                      htmlFor={`${course.id}-day-description`}
                    >
                      {`Day(${dayIndex + 1}) description`}
                    </label>
                    <textarea
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].days[dayIndex].description =
                          e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${day}-description`}
                      name={`${course.id}-${day} description`}
                      type="text"
                      placeholder={`Day(${dayIndex + 1}) description `}
                      value={day.description}
                    />
                    {day.details.map((detail, detailIndex) => (
                      <React.Fragment>
                        <label
                          className="font-weight-bold"
                          htmlFor={`${course.id}-day-detail(${detailIndex +
                            1})`}
                        >
                          {`Day(${dayIndex + 1}) detail(${detailIndex + 1})`}
                        </label>
                        <textarea
                          onChange={e => {
                            const coursesState = this.state.courses;
                            coursesState[index].days[dayIndex].details[
                              detailIndex
                            ] = e.target.value;
                            this.setState({ courses: coursesState });
                          }}
                          id={`${course.id}-${day}-detail(${detailIndex + 1})`}
                          name={`${course.id}-${day} detail(${detailIndex +
                            1})`}
                          type="text"
                          placeholder={`Day(${dayIndex +
                            1}) detail(${detailIndex + 1}) `}
                          value={day.details[detailIndex]}
                        />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))} */}
              <label
                className="font-weight-bold"
                htmlFor={`${course.id}-price`}
              >
                Price
              </label>
              <input
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].price = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                name={`${course.id}-price`}
                type="text"
                placeholder="Price"
                defaultValue={course.price}
                className="w-100"
              />
              {course.dates &&
                course.dates.map((date, dateIndex) => (
                  <div
                    key={`${date}-${dateIndex}-${date}`}
                    className="border border-primary m-3"
                  >
                    <label
                      className="font-weight-bold"
                      htmlFor={`${course.id}-date`}
                    >
                      {`Date${dateIndex + 1}`}
                    </label>
                    <br />
                    <div>{formattedDate(date.date)}</div>
                    <img src={calendar} alt="date picker" />
                    <DatePicker
                      className="date-picker"
                      placeholderText="click here to select a date"
                      // selected={formattedDate(date.date)}
                      onChange={async selectedDate => {
                        const coursesState = this.state.courses;
                        coursesState[index].dates[
                          dateIndex
                        ].date = await selectedDate.toString();
                        this.setState({
                          courses: coursesState,
                          dateUpdated: !this.state.dateUpdated
                        });
                      }}
                      // value={this.state.courses[index].dates[dateIndex].date}
                    />
                    {/* <input
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].dates[dateIndex].date =
                          e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${date.date}`}
                      name={`${course.id}-${date.date}`}
                      type="text"
                      placeholder="DD/MM/YEAR"
                      value={date.date}
                    /> */}
                    <label
                      className="font-weight-bold d-block"
                      htmlFor={`${course.id}-placesLeft`}
                    >
                      Places left
                    </label>
                    <input
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].dates[dateIndex].placesLeft =
                          e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${date.date}-placesLeft`}
                      name={`${course.id}-${date.date}-placesLeft`}
                      type="text"
                      placeholder="PlacesLeft"
                      defaultValue={date.placesLeft}
                      className="w-100"
                    />
                  </div>
                ))}
            </div>
          ))}
          <button type="submit">SAVE</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CoursesAdmin;
