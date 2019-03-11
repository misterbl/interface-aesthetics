import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "../const/routes";
import "./App.scss";
// import "./index.css";

import Home from "./Home";
import Courses from "./Courses";
import WhoWetrain from "./WhoWetrain";
import About from "./About";
import ContactUs from "./ContactUs";
import Header from "../components/Header";
// import Admin from "./Admin";
import Course from "./Course";
import { BecomeAModel } from "./BecomeAModel";
import { Footer } from "../components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  openModal = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
          <Route path={ROUTES.COURSE} component={Course} />
          <Route exact path={ROUTES.COURSES} component={Courses} />
          <Route path={ROUTES.WHO_WE_TRAIN} component={WhoWetrain} />
          <Route path={ROUTES.BECOME_A_MODEL} component={BecomeAModel} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.CONTACT_US} component={ContactUs} />
          {/* <Route path={ROUTES.ADMIN} component={Admin} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
