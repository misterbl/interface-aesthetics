import React from "react";
import { withRouter } from "react-router";
// import getBlog from "../apiCalls/getBlog";
// import blog from "../data/blogList";
import ROUTES from "../const/routes";
import NonSurgicalAesthetics from "../components/Articles/NonSurgicalAesthetics";
import DermalFillerLowerFace from "../components/Articles/DermalFillerLowerFace";
import Complications from "../components/Articles/Complications";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      articleId: parseInt(props.match.params.articleId),
      article: { title: "", image: "", text: "" }
    };
  }
  // async componentDidMount() {
  //   // const blog = await getBlog();
  //   await this.setState({ blog });
  //   this.getArticle();
  // }
  // getArticle = () => {
  //   const article = this.state.blog.filter(
  //     article => article.id === this.state.articleId
  //   );
  //   this.setState({ article: article[0] });
  // };

  backToBlog = () => {
    this.props.history.push(ROUTES.BLOG);
  };

  render() {
    const {
      articleId,
      article: { title, image, text }
    } = this.state;
    return (
      <main>
        <div className="p-60 article">
          {articleId === 1 && <NonSurgicalAesthetics />}
          {articleId === 2 && <DermalFillerLowerFace />}
          {articleId === 3 && <Complications />}
          <div className="text-center">
            <button
              className="button-orange-border my-5"
              onClick={this.backToBlog}
            >
              BACK TO BLOG
            </button>
          </div>
        </div>
      </main>
    );
  }
}
export default withRouter(Article);
