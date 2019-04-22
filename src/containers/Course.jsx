import React from "react";
import { getCourseImage } from "../apiThunk";
import { withRouter } from "react-router";
import { Query } from "react-apollo";
// import { ClipLoader } from "react-spinners";
import gql from "graphql-tag";
import CourseImage from "../components/CourseImage";
import courses from "../data/courses";
import CourseInformation from "../components/CourseInformation";
import BookCourseCard from "../components/BookCourseCard";
import CourseDay from "../components/CourseDay";
import BlueFooter from "../components/BlueFooter";
import BluePhotoContainer from "../components/BluePhotoContainer";
import TitleWithMark from "../components/TitleWithMark";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      imageBase64: "",
      courseId: parseInt(props.match.params.courseId, 10)
    };
  }

  componentDidMount() {
    // this.getCourse();
    // const { courseId } = this.props.match.params;
    // this.setState({ courseId });
    // const imageBase64 = await getCourseImage(this.props.image);
    // this.setState({ imageBase64 });
    //   console.log(this);
    //   console.log(courseId);
  }
  // renderImage() {
  //   const imageBase64 = this.state.image && getCourseImage(this.state.image);
  //   return <img src={imageBase64} />;
  // }
  // getCourse = () => {
  //   // const { courseId } = this.props.match.params;
  //   //  this.setState({ courseId });
  //   const GET_COURSE = gql`
  //     {
  //       getCourseById(_id:"${this.state.courseId}") {
  //         _id
  //         title
  //         description
  //         price
  //         image
  //       }
  //     }
  //   `;
  //   return (
  //     <Query query={GET_COURSE}>
  //       {({ loading, error, data }) => {
  //         if (loading)
  //           return (
  //             <div className="text-center">
  //               <ClipLoader
  //                 sizeUnit={"px"}
  //                 size={30}
  //                 color={"#123abc"}
  //                 loading={true}
  //               />
  //             </div>
  //           );
  //         if (error) return `Error! ${error.message}`;
  //         const {
  //           getCourseById: { title, description, image }
  //         } = data;
  //         return (
  //           <div className="container position-absolute bg-white p-5 m-5 w-85">
  //             <div className="row d-flex">
  //               <div className="col col-6">
  //                 <h1
  //                   className="interface-blue mb-3"
  //                   dangerouslySetInnerHTML={{ __html: title }}
  //                 />
  //                 <p dangerouslySetInnerHTML={{ __html: description }} />
  //               </div>
  //               <div className="col">
  //                 <CourseImage image={image} />
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       }}
  //     </Query>
  //   );
  // };
  getCourse = () => {
    const filtered = courses.filter(
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
        <BluePhotoContainer container="course-photo" header="course-header">
          <p>OUR COURSES</p>
          <p>{title}</p>
        </BluePhotoContainer>
        <div className="course flex-wrap flex-lg-nowrap">
          <div className="w-75 mr-5">
            <div className="course-section">
              <TitleWithMark text="Course Overview" />
              <p className="font-16 my-3">{overview}</p>
            </div>
            <div className="course-section">
              <TitleWithMark text="What can you expect" />
            </div>
            {days && (
              <div className="d-flex flex-wrap my-5">
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
            <div className="course-section">
              <TitleWithMark text="More information" />
              {moreInformation.map(info => (
                <p key={info} className="font-16 my-3">
                  {info}
                </p>
              ))}
            </div>
          </div>
          <BookCourseCard title={title} dates={dates} />
        </div>
        <BlueFooter container="book-course-photo">
          <div className="flex-wrap flex-lg-nowrap">
            <div className="w-50">
              <TitleWithMark text="Book your place now" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                feugiat rhoncus nisl, id rutrum dui tempor vitae. Aenean vel
                placerat nisl.
              </p>
            </div>
            <form className="select-date">
              <div className="select-container">
                <select className="form-control form-control-sm">
                  <option selected>Select course date</option>
                  {dates.map(date => (
                    <option key={date}>{date}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </BlueFooter>
      </React.Fragment>
    );
  };

  render() {
    return <main>{this.getCourse()}</main>;
  }
}
export default withRouter(Course);
