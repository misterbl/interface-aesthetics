import fetch from "node-fetch";

const getBlog = async () => {
  try {
    const response = await fetch(
      "https://interface-aesthetics.firebaseio.com/blog.json"
    );
    const json = await response.json();
    let data = Object.entries(json).map(e =>
      Object.assign(e[1], { key: e[0] })
    );
    if (response && !response.ok) {
      throw new Error("Soemething went wrong");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getBlog;
