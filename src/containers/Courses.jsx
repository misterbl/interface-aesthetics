import React from "react";
import { withRouter } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ROUTES from "../const/routes";
import CourseCard from "../components/CourseCard";

export class Courses extends React.Component {
  getCourses = () => {
    const GET_ALL_COURSES = gql`
      {
        courses {
          _id
          title
          description
          price
          image
        }
      }
    `;
    return (
      <Query query={GET_ALL_COURSES}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="text-center">
                <ClipLoader
                  sizeUnit={"px"}
                  size={30}
                  color={"#123abc"}
                  loading={true}
                />
              </div>
            );
          if (error) return `Error! ${error.message}`;
          // console.log(data.courses);
          return (
            <div className="position-absolute bg-white m-5 p-5">
              {" "}
              <h1 className="ml-4 mb-4">Courses</h1>
              <ul className="d-flex flex-wrap p-0 list-unstyled">
                {data &&
                  data.courses &&
                  data.courses.map(course => (
                    <CourseCard
                      id={course._id}
                      key={course._id}
                      title={course.title}
                      price={course.price}
                      description={course.description}
                      image={course.image}
                    />
                  ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  };
  render() {
    return (
      <div>
        {" "}
        <div className="gradiant-div"> </div>
        {this.getCourses()}
      </div>
    );
  }
}

export default withRouter(Courses);
