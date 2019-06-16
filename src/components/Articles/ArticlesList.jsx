import React from "react";
import NonSurgicalAesthetics from "./NonSurgicalAesthetics";

const ArticlesList = ({ articleIndex }) => {
  switch (articleIndex) {
    case "1":
      return <NonSurgicalAesthetics />;
    default:
      return <h1>Article not available</h1>;
  }
};

export default ArticlesList;
