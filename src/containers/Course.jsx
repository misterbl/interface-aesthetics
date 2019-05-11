import React from "react";
import { getCourseImage } from "../apiThunk";
import { withRouter } from "react-router";
import ROUTES from "../const/routes";
import { getAllCourses } from "../../functions/firebase-database";
import CourseInformation from "../components/CourseInformation";
import BookCourseCard from "../components/BookCourseCard";
import CourseDay from "../components/CourseDay";
import TitleWithMark from "../components/TitleWithMark";
import formattedDate from "../utils/formattedDate";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      imageBase64: "",
      courseId: parseInt(props.match.params.courseId, 10),
      courses: undefined
    };
  }

  async componentDidMount() {
    const courses = await getAllCourses();
    this.setState({ courses });
  }

  pushToBookCourse = () => {
    this.props.history.push(ROUTES.BOOK_A_COURSE);
  };
  getCourse = () => {
    if (this.state.courses) {
      const filtered = this.state.courses.filter(
        course => course.id === this.state.courseId
      );
      const {
        overview,
        moreInformation,
        information,
        title,
        dates,
        days
      } = filtered[0];
      return (
        <React.Fragment>
          <header>
            <div className="text-center w-75 ml-5 mt-5">
              <h4 className="m-0">OUR COURSES</h4>
              <h2>{title}</h2>
            </div>
            <img src={home1} className="d-block w-100" alt={title} />
          </header>
          <div className="p-60">
            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center">
              <div className="w-75 mr-5">
                <TitleWithMark text="Course Overview" />
                <p className="mb-4">{overview}</p>{" "}
                <TitleWithMark text="What can you expect" />
                {days && (
                  <div className="d-flex flex-wrap my-3">
                    {days.map((day, i) => (
                      <CourseDay
                        index={i + 1}
                        description={day.description}
                        details={day.details}
                      />
                    ))}
                  </div>
                )}
                {
                  <div className="my-3">
                    {information.map(info => (
                      <CourseInformation
                        key={info.overview}
                        image={info.image}
                        overview={info.overview}
                        details={info.details}
                      />
                    ))}
                  </div>
                }
                <TitleWithMark text="More information" />
                {moreInformation.map(info => (
                  <p key={info} className="my-3">
                    {info}
                  </p>
                ))}
              </div>
              <BookCourseCard
                title={title}
                dates={dates}
                onClick={this.pushToBookCourse}
              />
            </div>
            <div className="position-absolute d-flex flex-wrap flex-lg-nowrap p-5 mt-5 text-white">
              <div className="w-50-container pr-3">
                <TitleWithMark text="Book your place now" color="white" />
                <p className="d-none d-sm-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam feugiat rhoncus nisl, id rutrum dui tempor vitae.
                  Aenean vel placerat nisl.
                </p>
              </div>
              <form className="w-50-container">
                <select className="select-course-container form-control form-control-sm">
                  <option selected>Select course date</option>
                  {dates.map(date => (
                    <option key={date.date}>
                      {`${formattedDate(date.date)} ${date.placesLeft} place${
                        date.placesLeft !== 0 ? "s" : ""
                      } left`}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <img
              src={home2}
              className="w-100 select-course-image mt-5"
              alt="book a course"
            />
          </div>
        </React.Fragment>
      );
    }
    return "loading...";
  };

  render() {
    return <main>{this.getCourse()}</main>;
  }
}
export default withRouter(Course);
