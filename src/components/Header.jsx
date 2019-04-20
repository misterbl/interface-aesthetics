import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavDropdown, Modal, Button, Navbar } from "react-bootstrap";
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
      <Navbar className="py-4 bg-white" collapseOnSelect expand="md">
        <Navbar.Toggle
          onClick={this.handleToggleClick}
          aria-controls="responsive-navbar-nav"
        >
          <NavBurgerButton open={this.state.isMenuOpen} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={this.isActive(ROUTES.COURSES)}
              href={ROUTES.COURSES}
            >
              COURSES
            </Nav.Link>
            <Nav.Link style={this.isActive(ROUTES.ABOUT)} href={ROUTES.ABOUT}>
              ABOUT
            </Nav.Link>
            <Nav.Link
              style={this.isActive(ROUTES.TESTIMONIALS)}
              href={ROUTES.TESTIMONIALS}
            >
              TESTIMONIALS
            </Nav.Link>
            <div className="d-none d-md-block">
              <Navbar.Brand href={ROUTES.INDEX}>
                <img
                  className="nav-link"
                  src={logo}
                  alt="interface aesthetics's logo"
                />
              </Navbar.Brand>
            </div>
            <Nav.Link style={this.isActive(ROUTES.MODEL)} href={ROUTES.MODEL}>
              MODEL
            </Nav.Link>
            <Nav.Link
              style={this.isActive(ROUTES.CONTACT)}
              href={ROUTES.CONTACT}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link style={this.isActive(ROUTES.BLOG)} href={ROUTES.BLOG}>
              BLOG
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-block d-md-none">
          <Navbar.Brand href={ROUTES.INDEX}>
            <img
              className="nav-link"
              src={logo}
              alt="interface aesthetics's logo"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}

export default withRouter(Header);
