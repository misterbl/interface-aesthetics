import React from "react";
import { StaticRouter } from "react-router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const client = new ApolloClient({
  uri: "https://interface-aesthetics-staging.firebaseapp.comgraphql"
});
export default class ServerApp extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <StaticRouter location={this.props.url} context={this.props.context}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </StaticRouter>
      </ApolloProvider>
    );
  }
}
