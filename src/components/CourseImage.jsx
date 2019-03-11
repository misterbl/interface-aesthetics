import React from "react";
import { getCourseImage } from "../apiThunk";

class CourseImage extends React.Component {
  state = { imageBase64: "" };

  async componentDidMount() {
    const imageBase64 = await getCourseImage(this.props.image);
    console.log(imageBase64);
    this.setState({ imageBase64 });
  }
  render() {
    return <img className="w-100" src={this.state.imageBase64} alt="course" />;
  }
}
export default CourseImage;
