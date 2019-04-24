import React from "react";
const uuidv1 = require("uuid/v1");
import TitleWithMark from "./TitleWithMark";
import { writeBlogArticle, getBlog } from "../../functions/firebase-database";
class BlogAdmin extends React.PureComponent {
  state = {
    blog: undefined,
    newArticle: {
      articleId: undefined,
      title: undefined,
      text: undefined,
      image: undefined
    }
  };

  async componentDidMount() {
    const blog = await getBlog();
    console.log(blog);
    this.setState({ blog });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateBlog(this.state.blog);
  };

  addArticle = async e => {
    e.preventDefault();
    const newArticleState = this.state.newArticle;
    newArticleState.articleId = uuidv1();
    await this.setState({ newArticle: newArticleState });
    console.log(this.state);
    writeBlogArticle(this.state.newArticle);
  };

  render() {
    const { blog } = this.state;
    return (
      <React.Fragment>
        <TitleWithMark text="Blog" />
        <p className="font-16">You can update the blog</p>
        {/* <form onSubmit={this.handleSubmit}>
          {blog &&
            blog.map((article, index) => (
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
        </form> */}
        <TitleWithMark text="Add an article" />
        <form onSubmit={this.addArticle}>
          ]
          <div className="mb-5 w-100 p-5 bg-white">
            <label className="font-weight-bold" htmlFor="newArticleTitle">
              Title
            </label>
            <textarea
              onChange={e => {
                const newArticleState = this.state.newArticle;
                newArticleState.title = e.target.value;
                this.setState({ newArticle: newArticleState });
              }}
              id="newArticleTitle"
              name="newArticleTitle"
              type="text"
              placeholder="Title"
              defaultValue={this.state.newArticle.title}
            />
            <label className="font-weight-bold" htmlFor="newArticleText">
              Text
            </label>
            <textarea
              onChange={e => {
                const newArticleState = this.state.newArticle;
                newArticleState.text = e.target.value;
                this.setState({ newArticle: newArticleState });
              }}
              id="newArticleText"
              name="newArticleText"
              type="text"
              placeholder="text"
              defaultValue={this.state.newArticle.text}
            />
          </div>
          <button type="submit">CREATE</button>
        </form>
      </React.Fragment>
    );
  }
}

export default BlogAdmin;
