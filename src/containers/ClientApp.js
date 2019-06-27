import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import ScrollToTop from "../components/ScrollToTop";

const client = new ApolloClient({
  uri: "https://interfaceaesthetics.co.ukgraphql"
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
