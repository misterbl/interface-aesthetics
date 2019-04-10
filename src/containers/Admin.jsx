import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { withRouter } from "react-router-dom";
// import ReactQuill from "react-quill";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ROUTES from "../const/routes";
import { uploadCourseImage, getCourseImage } from "../apiThunk";
import { UploadScreen } from "../components/UploadScreen";
import { getAllCourses } from "../../functions/firebase-database";
import { updateCourses } from "../../functions/firebase-database";
import BluePhotoContainer from "../components/BluePhotoContainer";
export class Admin extends React.Component {
  async componentDidMount() {
    const courses = await getAllCourses();
    this.setState({ courses });
    console.log("courses: ", courses);
  }
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      editorState: EditorState.createEmpty()
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
    this.onChange = editorState => this.setState({ editorState });
    this.setEditor = editor => {
      this.editor = editor;
    };
  }

  formSubmit = e => {
    e.preventDefault();
    updateCourses(this.state.courses);
    console.log("update");
  };

  render() {
    const { courses } = this.state;

    console.log(this.state);
    return (
      <main className="admin-page">
        <BluePhotoContainer container="group-photo" header="contact-header">
          <p>Admin Dashboard</p>
        </BluePhotoContainer>
        <p className="blue-font w-75">Courses</p>
        <p className="w-50 font-16">
          You can update the courses information here
        </p>
        <form onSubmit={this.formSubmit}>
          {courses.map((course, index) => (
            <div className="mb-5 w-100 p-5">
              <label htmlFor={`${course.id}-title`}>Title</label>
              <input
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
              <label htmlFor={`${course.id}-price`}>Price</label>
              <input
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
              <label htmlFor={`${course.id}-placesLeft`}>Places left</label>
              <input
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
              <label htmlFor={`${course.id}-description`}>Description</label>
              <textarea
                onChange={e => {
                  const coursesState = this.state.courses;
                  coursesState[index].description = e.target.value;
                  this.setState({ courses: coursesState });
                }}
                id={`${course.id}-description`}
                name={`${course.id}-description`}
                placeholder="Description"
                value={course.description}
              />
              {course.dates &&
                course.dates.map((date, dateIndex) => (
                  <React.Fragment>
                    <label htmlFor={`${course.id}-description`}>
                      {`Date${dateIndex + 1}`}
                    </label>
                    <input
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
              <button type="submit">SAVE</button>
            </div>
          ))}
        </form>
      </main>
    );
  }
}

export default withRouter(Admin);
