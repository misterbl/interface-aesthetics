import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavDropdown, Modal, Button, Navbar } from "react-bootstrap";
import ROUTES from "../const/routes";
import logo from "../assets/Interface_logo.svg";
export class Header extends React.Component {
  isActive = route => {
    if (route === this.props.location.pathname)
      return {
        textDecoration: "none",
        borderBottom: "2px solid red",
        height: "35px",
        color: "#2e76ba !important"
      };
  };

  render() {
    return (
      <Navbar className="py-4 bg-white" collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <div className="hamburger-line " />
          <div className="hamburger-line " />
          <div className="hamburger-line " />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={this.isActive("/courses")} href={ROUTES.COURSES}>
              COURSES
            </Nav.Link>
            <Nav.Link style={this.isActive("/about")} href={ROUTES.ABOUT}>
              ABOUT
            </Nav.Link>
            <Nav.Link
              style={this.isActive("/testimonials")}
              href={ROUTES.TESTIMONIALS}
            >
              TESTIMONIALS
            </Nav.Link>
            <Navbar.Brand href={ROUTES.INDEX}>
              <img
                className="nav-link"
                src={logo}
                alt="interface aesthetics's logo"
              />
            </Navbar.Brand>
            <Nav.Link style={this.isActive("/model")} href={ROUTES.MODEL}>
              MODEL
            </Nav.Link>
            <Nav.Link style={this.isActive("/contact")} href={ROUTES.CONTACT}>
              CONTACT
            </Nav.Link>
            <Nav.Link style={this.isActive("/blog")} href={ROUTES.BLOG}>
              BLOG
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
