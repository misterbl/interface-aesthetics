import React from "react";
import BluePhotoContainer from "../components/BluePhotoContainer";
import BlogList from "../components/BlogList";
// import blog from "../data/blogList";
import getBlog from "../apiCalls/getBlog";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      showedArticles: [],
      numberInView: 10
    };
  }

  async componentDidMount() {
    const blog = await getBlog();
    await this.setState({ blog });
    console.log(blog);
    this.filterBlog();
  }

  filterBlog = () => {
    const showedArticles = this.state.blog.slice(0, this.state.numberInView);
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
        <BluePhotoContainer container="blog-photo" header="courses-header">
          <p>INTERFACE AESTHETICS</p>
          <p>LATEST NEWS</p>
        </BluePhotoContainer>
        <div className="p-70">
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
