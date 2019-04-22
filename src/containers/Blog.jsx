import React from "react";
import BluePhotoContainer from "../components/BluePhotoContainer";
import BlogList from "../components/BlogList";
import blog from "../data/blogList";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showedArticles: [],
      numberInView: 9
    };
  }

  componentDidMount() {
    this.filterBlog();
  }
  filterBlog = () => {
    const showedArticles = blog.filter(
      article => article.id <= this.state.numberInView
    );
    this.setState({ showedArticles });
  };

  exploreMore = async () => {
    await this.setState({ numberInView: this.state.numberInView + 6 });
    this.filterBlog();
  };

  render() {
    const { showedArticles } = this.state;
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
