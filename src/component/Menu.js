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

                    <li className="menu-item"><Link className="active  nav-link" to="/">Home</Link></li>
                    <li className="menu-item"><Link className="nav-link" to="/AboutUs" >About Us</Link></li>
                    <li className="menu-item"><Link className="nav-link" to="/Services" >Services</Link></li>
                    <li className="menu-item"><Link className="nav-link" to="/OurWork" >Our Work</Link></li>
                    <li className="menu-item"><Link className="nav-link" to="/Contact" >Contact</Link></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
