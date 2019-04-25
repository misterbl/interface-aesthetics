import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import ROUTES from "../const/routes";
import logo from "../assets/Interface_logo.svg";
import whiteLogo from "../assets/Interface_logo-white.svg";

import NavBurgerButton from "./NavBurgerButton";
export class Header extends React.Component {
  state = { showModal: false };
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

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <nav className="py-4 bg-white w-100">
        <button
          onClick={this.handleShowModal}
          className="bg-transparent  border-0 w-100 d-block d-md-none pt-4"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <NavBurgerButton open={false} />
        </button>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
        >
          <button
            onClick={this.handleCloseModal}
            className="bg-light-blue  border-0 w-100 d-block d-md-none"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <NavBurgerButton open={true} />
          </button>
          <ul className="d-flex flex-column bg-light-blue w-100 h-100 text-center">
            <li className="my-5">
              <a href={ROUTES.INDEX}>
                <img
                  className="m-auto"
                  src={whiteLogo}
                  alt="interface aesthetics's logo"
                />
              </a>
            </li>
            <li className="mb-3">
              <a
                className="font-weight-bold text-white"
                href={ROUTES.COURSES}
                style={this.isActive(ROUTES.COURSES)}
              >
                COURSES <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="mb-3">
              <a
                className="font-weight-bold text-white"
                href={ROUTES.ABOUT}
                style={this.isActive(ROUTES.ABOUT)}
              >
                ABOUT
              </a>
            </li>
            <li className="mb-3">
              <a
                className="font-weight-bold text-white"
                href={ROUTES.TESTIMONIALS}
                style={this.isActive(ROUTES.TESTIMONIALS)}
              >
                TESTIMONIALS
              </a>
            </li>
            <li className="mb-3">
              <a
                className="font-weight-bold text-white"
                href={ROUTES.MODEL}
                style={this.isActive(ROUTES.MODEL)}
              >
                MODEL
              </a>
            </li>
            <li className="mb-3">
              <a
                className="font-weight-bold text-white"
                href={ROUTES.CONTACT}
                style={this.isActive(ROUTES.CONTACT)}
              >
                CONTACT
              </a>
            </li>
            <li className="mb-3">
              <a
                className="font-weight-bold text-white"
                href={ROUTES.BLOG}
                style={this.isActive(ROUTES.BLOG)}
              >
                BLOG
              </a>
            </li>
          </ul>
        </Modal>
        <div className="d-block d-md-none text-center">
          <a href={ROUTES.INDEX}>
            <img src={logo} alt="interface aesthetics's logo" />
          </a>
        </div>
        <ul className="d-none d-md-flex justify-content-between w-100">
          <li>
            <a
              className="font-weight-bold blue-font-sm "
              href={ROUTES.COURSES}
              style={this.isActive(ROUTES.COURSES)}
            >
              COURSES <span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a
              className="font-weight-bold blue-font-sm"
              href={ROUTES.ABOUT}
              style={this.isActive(ROUTES.ABOUT)}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="font-weight-bold blue-font-sm"
              href={ROUTES.TESTIMONIALS}
              style={this.isActive(ROUTES.TESTIMONIALS)}
            >
              TESTIMONIALS
            </a>
          </li>
          <div className="d-none d-md-block">
            <a className="m-0" href={ROUTES.INDEX}>
              <img
                className="m-0"
                src={logo}
                alt="interface aesthetics's logo"
              />
            </a>
          </div>
          <li>
            <a
              className="font-weight-bold blue-font-sm"
              href={ROUTES.MODEL}
              style={this.isActive(ROUTES.MODEL)}
            >
              MODEL
            </a>
          </li>
          <li>
            <a
              className="font-weight-bold blue-font-sm"
              href={ROUTES.CONTACT}
              style={this.isActive(ROUTES.CONTACT)}
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              className="font-weight-bold blue-font-sm"
              href={ROUTES.BLOG}
              style={this.isActive(ROUTES.BLOG)}
            >
              BLOG
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
