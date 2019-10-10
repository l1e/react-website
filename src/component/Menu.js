import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import '../style/Menu.css';
import goalImg from '../img/logo_250_dark.webp';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img className="logo" src={goalImg} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="active"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/AboutUs" >About Us</Link></Nav.Link>
                    <Nav.Link ><Link to="/Services" >Services</Link></Nav.Link>
                    <Nav.Link ><Link to="/OurWork" >Our Work</Link></Nav.Link>
                    <Nav.Link ><Link to="/Contact" >Contact</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
