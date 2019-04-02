import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavDropdown, Modal, Button, Navbar } from "react-bootstrap";
import ROUTES from "../const/routes";
import logo from "../assets/Interface_logo_darkblue.png";
export class Header extends React.Component {
  pushToIndex = () => {
    this.props.history.push(ROUTES.INDEX);
  };

  render() {
    return (
      <Navbar
        className="py-4 bg-white"
        collapseOnSelect
        navbar-expand-sm
        expand="md"
      >
        {/* <div
          onClick={this.pushToIndex}
          className="image-container mx-5 pr-5 mt-2"
        >
          <img className="w-100" src={logo} alt="interface aesthetics's logo" />
        </div> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <div className="hamburger-line " />
          <div className="hamburger-line " />
          <div className="hamburger-line " />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={ROUTES.COURSES}>Courses</Nav.Link>
            <Nav.Link href={ROUTES.ABOUT}>About</Nav.Link>
            <Nav.Link href={ROUTES.TESTIMONIALS}>Testimonials</Nav.Link>
            <Navbar.Brand href={ROUTES.INDEX}>
              <img
                className="nav-link"
                src={logo}
                alt="interface aesthetics's logo"
              />
            </Navbar.Brand>
            <Nav.Link href={ROUTES.MODEL}>Model</Nav.Link>
            <Nav.Link href={ROUTES.CONTACT}>Contact</Nav.Link>
            <Nav.Link href={ROUTES.BLOG}>Blog</Nav.Link>

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
