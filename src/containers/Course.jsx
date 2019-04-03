import React from "react";
import { getCourseImage } from "../apiThunk";
import { withRouter } from "react-router";
import { Query } from "react-apollo";
import { ClipLoader } from "react-spinners";
import gql from "graphql-tag";
import CourseImage from "../components/CourseImage";

class Course extends React.Component {
  state = { image: "", imageBase64: "", courseGuid: "" };

  componentDidMount() {
    const { courseGuid } = this.props.match.params;
    this.setState({ courseGuid });

    // const imageBase64 = await getCourseImage(this.props.image);
    // this.setState({ imageBase64 });
    //   console.log(this);
    //   console.log(courseGuid);
  }
  renderImage() {
    const imageBase64 = this.state.image && getCourseImage(this.state.image);
    return <img src={imageBase64} />;
  }
  getCourse = () => {
    // const { courseGuid } = this.props.match.params;
    //  this.setState({ courseGuid });
    const GET_COURSE = gql`
      {
        getCourseById(_id:"${this.state.courseGuid}") {
          _id
          title
          description
          price
          image
        }
      }
    `;
    return (
      <Query query={GET_COURSE}>
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
          const {
            getCourseById: { title, description, image }
          } = data;
          return (
            <div className="container position-absolute bg-white p-5 m-5 w-85">
              <div className="row d-flex">
                <div className="col col-6">
                  <h1
                    className="interface-blue mb-3"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="col">
                  <CourseImage image={image} />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  };
  render() {
    return (
      <div>
        <div className="gradiant-div"> </div>
        {this.getCourse()}
        {this.renderImage()}
      </div>
    );
  }
}
export default withRouter(Course);
