import React from "react";
import TitleWithMark from "./TitleWithMark";

class CoursesAdmin extends React.PureComponent {
  state = {
    courses: this.props.courses
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.updateBlog(this.state.blog);
  };

  render() {
    const { courses } = this.props;
    return (
      <React.Fragment>
        <TitleWithMark text="Courses" />
        <p className="font-16">You can update the courses information here</p>
        <form onSubmit={this.formSubmit}>
          {courses.map((course, index) => (
            <div className="mb-5 w-100 p-5 bg-white">
              <label
                className="font-weight-bold"
                htmlFor={`${course.id}-title`}
              >
                Title
              </label>
              <textarea
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].title = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                id={`${course.id}-title`}
                name={`${course.id}-title`}
                type="text"
                placeholder="Title"
                value={course.title}
              />
              <label
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
                  </React.Fragment>
                ))}
              {course.days &&
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
                ))}
              <label
                className="font-weight-bold"
                htmlFor={`${course.id}-price`}
              >
                Price
              </label>
              <textarea
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].price = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                name={`${course.id}-price`}
                type="text"
                placeholder="Price"
                value={course.price}
              />
              <label
                className="font-weight-bold"
                htmlFor={`${course.id}-placesLeft`}
              >
                Places left
              </label>
              <textarea
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].placesLeft = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                id={`${course.id}-placesLeft`}
                name={`${course.id}-placesLeft`}
                type="text"
                placeholder="PlacesLeft"
                value={course.placesLeft}
              />
              {course.dates &&
                course.dates.map((date, dateIndex) => (
                  <React.Fragment>
                    <label
                      className="font-weight-bold"
                      htmlFor={`${course.id}-date`}
                    >
                      {`Date${dateIndex + 1}`}
                    </label>
                    <textarea
                      onChange={e => {
                        const coursesState = this.state.courses;
                        coursesState[index].dates[dateIndex] = e.target.value;
                        this.setState({ courses: coursesState });
                      }}
                      id={`${course.id}-${date}`}
                      name={`${course.id}-${date}`}
                      type="text"
                      placeholder="DD/MM/YEAR"
                      value={date}
                    />
                  </React.Fragment>
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
