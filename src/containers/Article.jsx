import React from "react";
import { withRouter } from "react-router";
import getBlog from "../apiCalls/getBlog";
import BluePhotoContainer from "../components/BluePhotoContainer";
import ROUTES from "../const/routes";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      articleId: props.match.params.articleId,
      article: {}
    };
  }
  async componentDidMount() {
    const blog = await getBlog();
    await this.setState({ blog });
    this.getArticle();
  }
  getArticle = () => {
    const article = this.state.blog.filter(
      article => article.id === this.state.articleId
    );
    this.setState({ article: article[0] });
  };

  backToBlog = () => {
    this.props.history.push(ROUTES.BLOG);
  };

  render() {
    const { article } = this.state;
    return (
      <main>
        <BluePhotoContainer container="blog-photo" header="courses-header">
          <p>INTERFACE AESTHETICS</p>
          <p>{article.title}</p>
        </BluePhotoContainer>
        <p className="p-60">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          saepe dicta aliquam vitae et consequatur natus nesciunt, nemo veniam?
          Reiciendis ex aut laboriosam molestiae nisi fugit veritatis eligendi
          totam repudiandae.
        </p>
        <img className="w-100 p-60" src={article.image} alt={article.title} />
        <p className="p-60">{article.text}</p>
        <div className="text-center">
          <button
            className="button-orange-border my-5"
            onClick={this.backToBlog}
          >
            BACK TO BLOG
          </button>
        </div>
      </main>
    );
  }
}
export default withRouter(Article);
