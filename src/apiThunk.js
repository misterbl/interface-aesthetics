import Axios from "axios";

export const uploadCourseImage = async (courseId, image, imageName) => {
  const body = { _id: courseId, image, imageName };
  try {
    const response = await Axios.create({
      baseURL: "http://localhost:5000/uploadCourseImage"
    }).post("", body);
    if (response && response.status === 200) {
      return response.data;
    } else {
      throw new Error("couldn't upload file");
    }
  } catch (error) {
    console.log(error);
    throw new Error("couldn't upload file");
  }
};

export const getCourseImage = async image => {
  try {
    const response = await Axios.get("http://localhost:5000/getCourseImage", {
      params: {
        image
      }
    });
    if (response && response.status === 200) {
      return response.data;
    } else {
      throw new Error("couldn't get Image");
    }
  } catch (error) {
    console.log(error);
    throw new Error("couldn't get Image");
  }
};
