import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import '../style/Menu.css';
import goalImg from '../img/logo_250_dark.webp';
function Menu() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img className="logo" src={goalImg} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="active" href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                    <Nav.Link href="#features">Services</Nav.Link>
                    <Nav.Link href="#pricing">Our Work</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
