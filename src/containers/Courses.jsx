import React from "react";
import { withRouter } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ROUTES from "../const/routes";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

export class Courses extends React.Component {
  // getCourses = () => {
  //   const GET_ALL_COURSES = gql`
  //     {
  //       courses {
  //         _id
  //         title
  //         description
  //         price
  //         image
  //       }
  //     }
  //   `;
  //   return (
  //     <Query query={GET_ALL_COURSES}>
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
  //         // console.log(data.courses);
  //         return (
  //           <div className="position-absolute bg-white m-5 p-5">
  //             {" "}
  //             <h1 className="ml-4 mb-4">Courses</h1>
  //             <ul className="d-flex flex-wrap p-0 list-unstyled">
  //               {data &&
  //                 data.courses &&
  //                 data.courses.map(course => (
  //                   <CourseCard
  //                     id={course._id}
  //                     key={course._id}
  //                     title={course.title}
  //                     price={course.price}
  //                     description={course.description}
  //                     image={course.image}
  //                   />
  //                 ))}
  //             </ul>
  //           </div>
  //         );
  //       }}
  //     </Query>
  //   );
  // };
  getCourses = () => (
    <div className="d-flex flex-wrap p-60 justify-content-between">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          price={course.price}
          image={course.image}
          handleClick={() => this.props.history.push(`/course/${course.id}`)}
        />
      ))}
    </div>
  );
  render() {
    return (
      <div>
        <div className="group-photo position-relative">
          <div className="bg-blue" />
          <div className="courses-header">
            <p>INTERFACE AESTHETICS</p>
            <p>OUR COURSES</p>
          </div>
        </div>
        <div className="d-flex justify-content-around bg-white p-60">
          <div className="discount d-flex flex-column">
            <p className="blue-font w-75">
              Our courses have been developed to provide the greatest possible
              exposure to real patients
            </p>
          </div>
          <div className="w-50 font-16">
            <p>
              Interface Aesthetics is leading innovation in non-surgical
              aesthetic training. High quality training is fundamental to safe
              and successful aesthetic practice.
            </p>
            <p>
              Our Foundation and Advanced courses are designed to provide
              unrivalled levels of hands-on injecting with model patients.
              Teaching is surgeon-led, in small groups and firmly grounded in
              anatomy.
            </p>
          </div>
        </div>
        {this.getCourses()}
      </div>
    );
  }
}

export default withRouter(Courses);
