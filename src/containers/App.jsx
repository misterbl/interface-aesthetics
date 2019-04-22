import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "../const/routes";
import "./App.scss";
import Home from "./Home";
import Courses from "./Courses";
import WhoWetrain from "./WhoWetrain";
import About from "./About";
import Contact from "./Contact";
import Header from "../components/Header";
import Course from "./Course";
import Model from "./Model";
import { Footer } from "../components/Footer";
import ModelForm from "../components/ModelForm";
import Blog from "./Blog";
import Article from "./Article";
import Admin from "./Admin";
import Testimonials from "./Testimonials";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.isLoading && (
          <div className="spinner-border loading-indicator " role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )} */}
        <Header />
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
          <Route path={ROUTES.COURSE} component={Course} />
          <Route exact path={ROUTES.COURSES} component={Courses} />
          <Route path={ROUTES.WHO_WE_TRAIN} component={WhoWetrain} />
          <Route path={ROUTES.MODEL} component={Model} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.TESTIMONIALS} component={Testimonials} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route path={ROUTES.BECOME_A_MODEL} component={ModelForm} />
          <Route path={ROUTES.BLOG} component={Blog} />
          <Route path={ROUTES.ARTICLE} component={Article} />
          <Route path={ROUTES.ADMIN} component={Admin} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
