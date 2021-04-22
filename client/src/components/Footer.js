import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar
            className="nav"
            sticky="top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Navbar>
    );
};

export default Footer;
