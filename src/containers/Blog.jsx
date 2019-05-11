import React from "react";
import BluePhotoContainer from "../components/BluePhotoContainer";
import BlogList from "../components/BlogList";
import blog from "../data/blogList";
import home1 from "../assets/home1.png";
// import getBlog from "../apiCalls/getBlog";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      showedArticles: [],
      numberInView: 10
    };
  }

  componentDidMount() {
    // const blog = await getBlog();
    // await this.setState({ blog });
    // console.log(blog);
    this.filterBlog();
  }

  filterBlog = () => {
    const showedArticles = blog.slice(0, this.state.numberInView);
    this.setState({ showedArticles });
  };

  exploreMore = async () => {
    await this.setState({ numberInView: this.state.numberInView + 6 });
    this.filterBlog();
  };

  render() {
    const { showedArticles, blog } = this.state;
    console.log(this.state);
    return (
      <main className>
        <header>
          <div className="text-center mx-5 mt-5 w-75">
            <h3 className="m-0 d-none d-sm-block">INTERFACE AESTHETICS</h3>
            <h2 className="m-0">LATEST NEWS</h2>
          </div>
          <img src={home1} className="d-block w-100" alt="become a model" />
        </header>
        <div className="p-60">
          <BlogList blogList={showedArticles} />
        </div>
        <div className="text-center">
          {showedArticles.length < blog.length && (
            <button
              className="button-orange-border my-5"
              onClick={this.exploreMore}
            >
              EXPLORE MORE
            </button>
          )}
        </div>
      </main>
    );
  }
}

export default Blog;
