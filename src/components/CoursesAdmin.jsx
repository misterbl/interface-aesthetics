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
      courses: [],
      buttonText: "SAVE"
    };
  }

  async componentDidMount() {
    const courses = await getAllCourses();
    this.setState({ courses });
  }

  onUpdateCourses = async courses => {
    this.setState({ buttonText: "SAVING" });
    await updateCourses(courses);
    this.setState({ buttonText: "SAVE" });
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  sortDates = () => {
    const coursesState = this.state.courses;
    coursesState.map(async (course, index) => {
      const sortedDates = await course.dates.sort(function(a, b) {
        console.log("course.dates: ", course.dates);
        const dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB;
      });
      console.log("coursesState: ", coursesState);
      console.log("coursesState[index][dates]: ", coursesState[index].dates);
      coursesState[index].dates = sortedDates;
      this.setState({ courses: coursesState });
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.sortDates();
    this.onUpdateCourses(this.state.courses);
  };

  render() {
    const { courses, buttonText } = this.state;
    return (
      <React.Fragment>
        <TitleWithMark text="Courses" />
        <p>You can update the courses information here</p>
        <form onSubmit={this.handleSubmit}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="mb-5 w-100 p-5 bg-white text-center"
            >
              <p className="font-weight-bold" htmlFor={`${course.id}-title`}>
                {course.title}
              </p>
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
                className="w-100 text-center"
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
                    <img src={calendar} alt="date picker" className="mx-5" />
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
                      htmlFor={`${course.id}-${date.date}-placesLeft`}
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
                      className="w-100 text-center border-0"
                    />
                    <label
                      className="font-weight-bold d-block"
                      htmlFor={`${course.id}-${date.date}-type`}
                    >
                      Type
                    </label>
                    <input
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].dates[dateIndex].type =
                          e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${date.date}-type`}
                      name={`${course.id}-${date.date}-type`}
                      type="text"
                      placeholder="Type"
                      defaultValue={date.type}
                      className="w-100 text-center border-0"
                    />
                  </div>
                ))}
            </div>
          ))}
          <button type="submit">{buttonText}</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CoursesAdmin;
