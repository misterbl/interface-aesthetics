import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/routes";
import logo from "../assets/Interface_logo.svg";
import NavBurgerButton from "./NavBurgerButton";
export class Header extends React.Component {
  state = { isMenuOpen: false };
  isActive = route => {
    if (route === this.props.location.pathname)
      return {
        textDecoration: "none",
        borderBottom: "2px solid red",
        height: "35px",
        color: "#2e76ba !important"
      };
  };

  handleToggleClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light py-4 bg-white">
        <button
          onClick={this.handleToggleClick}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <NavBurgerButton open={this.state.isMenuOpen} />{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                href={ROUTES.COURSES}
                style={this.isActive(ROUTES.COURSES)}
              >
                COURSES <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={ROUTES.ABOUT}
                style={this.isActive(ROUTES.ABOUT)}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={ROUTES.TESTIMONIALS}
                style={this.isActive(ROUTES.TESTIMONIALS)}
              >
                TESTIMONIALS
              </a>
            </li>
            <div className="d-none d-md-block">
              <a className="navbar-brand" href={ROUTES.INDEX}>
                <img
                  className="nav-link"
                  src={logo}
                  alt="interface aesthetics's logo"
                />
              </a>
            </div>
            <li className="nav-item">
              <a
                className="nav-link"
                href={ROUTES.MODEL}
                style={this.isActive(ROUTES.MODEL)}
              >
                MODEL
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={ROUTES.CONTACT}
                style={this.isActive(ROUTES.CONTACT)}
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={ROUTES.BLOG}
                style={this.isActive(ROUTES.BLOG)}
              >
                BLOG
              </a>
            </li>
          </ul>
        </div>
        <div className="d-block d-md-none text-center">
          <a className="navbar-brand" href={ROUTES.INDEX}>
            <img
              className="nav-link"
              src={logo}
              alt="interface aesthetics's logo"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
