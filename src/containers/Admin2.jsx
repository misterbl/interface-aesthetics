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
import { addCourse } from "../../functions/firebase-database";
export class Admin extends React.Component {
  async componentDidMount() {
    const courses = await getAllCourses();
    console.log("courses: ", courses);
  }
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      imageName: "",
      imageFullName: "",
      courseId: "",
      price: "",
      imageData: null,
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

  componentDidMount() {
    this.focusEditor();
  }

  handleTitleChange = title => {
    this.setState({ title });
  };

  handleDescriptionChange = description => {
    this.setState({ description });
  };

  handlePriceChange = price => {
    this.setState({ price });
  };

  handleImageChange = image => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({ image: reader.result, imageName: image.name });
      },
      false
    );
    reader.readAsDataURL(image);
  };

  saveImage = () => {
    const { courseId, image, imageName } = this.state;
    uploadCourseImage(courseId, image, imageName).then(data =>
      this.setState({ imageFullName: data })
    );
  };

  saveCourse = () => {
    const ADD_COURSE = gql`
      mutation AddCourse($title: String, $description: String, $price: String) {
        addCourse(title: $title, description: $description, price: $price) {
          _id
          title
          description
          price
          image
        }
      }
    `;

    return (
      <Mutation mutation={ADD_COURSE}>
        {addCourse => (
          <button
            onClick={() =>
              addCourse({
                variables: {
                  title: this.state.title,
                  description: this.state.description,
                  price: this.state.price
                }
              }).then(async data => {
                data &&
                  data.data &&
                  data.data.addCourse &&
                  data.data.addCourse._id &&
                  (await this.setState({ courseId: data.data.addCourse._id }));
                console.log(data.data.addCourse._id);
                console.log(this.state.courseId);
              })
            }
          >
            Save course
          </button>
        )}
      </Mutation>
    );
  };

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  render() {
    getAllCourses().then(courses => console.log("courses: ", courses));
    // addCourse(
    //   "course1",
    //   "new description",
    //   "new image",
    //   "new price",
    //   "new link",
    //   "new title"
    // );
    const styles = {
      editor: {
        border: "1px solid gray",
        minHeight: "6em"
      }
    };

    const { title, description, price } = this.state;
    // console.log(this.state);
    return (
      <React.Fragment>
        <div>
          <h1 className="text-center mt-5">Title</h1>
          <p>https://compressimage.toolur.com/</p>
          <p>at 20%</p>
          <div style={styles.editor} onClick={this.focusEditor}>
            <button onClick={this.onItalicClick}>
              <em>I</em>
            </button>
            <Editor
              ref={this.setEditor}
              editorState={this.state.editorState}
              onChange={this.onChange}
              handleKeyCommand={this.handleKeyCommand}
            />
          </div>
          {/* <ReactQuill
            modules={{ toolbar: [[{ header: [false] }]] }}
            value={title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div>
          <h1 className="text-center mt-5">Description</h1>
          <ReactQuill
            modules={{
              toolbar: [
                [{ header: [false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" }
                ],
                ["link", "image"],
                ["clean"]
              ]
            }}
            value={description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <div>
          <h1 className="text-center mt-5">Price</h1>
          <ReactQuill
            modules={{
              toolbar: [[{ header: [false] }]]
            }}
            value={price}
            onChange={this.handlePriceChange}
          /> */}
        </div>
        <div>
          <h1 className="text-center mt-5">Image</h1>
          <input
            type="file"
            required
            onChange={({
              target: {
                validity,
                files: [file]
              }
            }) => validity.valid && this.handleImageChange(file)}
          />
          <button onClick={this.saveImage}>Save Image</button>
        </div>

        {this.saveCourse()}
        <button
          onClick={() =>
            getCourseImage(this.state.imageFullName).then(data =>
              this.setState({ imageData: data })
            )
          }
        >
          Get image
        </button>
        {this.state.imageData && <img src={this.state.imageData} />}
      </React.Fragment>
    );
  }
}

export default withRouter(Admin);
