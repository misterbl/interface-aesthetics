import React from "react";
import TitleWithMark from "./TitleWithMark";

class BlogAdmin extends React.PureComponent {
  state = {
    blog: this.props.blog
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.updateBlog(this.state.blog);
  };

  render() {
    const { blog } = this.props;
    return (
      <React.Fragment>
        <TitleWithMark text="Blog" />
        <p className="font-16">You can update the blog</p>
        <form onSubmit={this.handleSubmit}>
          {blog.map((article, index) => (
            <div className="mb-5 w-100 p-5 bg-white">
              <label
                className="font-weight-bold"
                htmlFor={`${article.id}-title`}
              >
                Title
              </label>
              <textarea
                onChange={e => {
                  const blogState = this.state.blog;
                  blogState[index].title = e.target.value;
                  this.setState({ blog: blogState });
                }}
                id={`${article.id}-title`}
                name={`${article.id}-title`}
                type="text"
                placeholder="Title"
                value={article.title}
              />
              <label
                className="font-weight-bold"
                htmlFor={`${article.id}-text`}
              >
                Text
              </label>
              <textarea
                onChange={e => {
                  const blogState = this.state.blog;
                  blogState[index].text = e.target.value;
                  this.setState({ blog: blogState });
                }}
                id={`${course.id}-overview`}
                name={`${course.id}-overview`}
                type="text"
                placeholder="overview"
                value={course.overview}
              />
            </div>
          ))}
          <button type="submit">SAVE</button>
        </form>
      </React.Fragment>
    );
  }
}

export default BlogAdmin;
