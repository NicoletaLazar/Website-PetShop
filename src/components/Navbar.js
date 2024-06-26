import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { Container, Nav, NavDropdown, Navbar, Row, Col } from "react-bootstrap";
import { IoMdCart } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";

export default function Topbar() {
  return (
    <Row>
      <Container id="navbar_container">
        <Navbar
          variant="light"
          sticky="top"
          //   overflow="hidden"
          expand="lg"
          bg="dark"
          data-bs-theme="dark"
          className="navbar"
        >
          <Col>
            <Navbar.Brand id="nav_logo" href="#home">
              <h1 id="first">Pet Shop</h1>
              <img src={logo} alt="MyPet" width="40" height="40" />
            </Navbar.Brand>
          </Col>
          <Col className="justify-content-end" id="last">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="justify-content-end"
                // variant="pills"
                defaultActiveKey="/"
                fill="bool"
                id="navs"
              >
                <NavLink
                  to="/"
                  href="#product"
                  style={({ isActive }) => {
                    return isActive ? { color: "#04c0d9" } : {};
                  }}
                  id="navs-link"
                >
                  <MdProductionQuantityLimits />
                  Product
                </NavLink>
                <NavLink
                  to="/cartpage"
                  href="#cart"
                  id="navs-link"
                  style={({ isActive }) => {
                    return isActive ? { color: "#04c0d9" } : {};
                  }}
                >
                  <IoMdCart />
                  Cart
                </NavLink>
                <img
                  src="http://www.w3.org/2000/svg"
                  // width="30"
                  size="50"
                  className="d-inline-block align-top"
                  alt=""
                />
                <FaUser />
                <NavDropdown
                  // style={{ right: 0, left: "auto" }}
                  // className="dropdown-menu-end"
                  // to="/userpage"
                  // href="#user"
                  title="User"
                  id="basic-nav-dropdown"
                  split
                  align={{ md: "end" }}
                >
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    <IoLogIn /> Log in
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <IoLogOut /> Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </Row>
  );
}
