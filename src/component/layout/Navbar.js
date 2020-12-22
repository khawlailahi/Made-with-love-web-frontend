import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import '../../Style/navbar.css'
const Navbar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/view">Made With Love</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    
    <Link to="/about">
    <ReactBootStrap.Nav.Link href="#pricing">About Us</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Categories" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/item/food">Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/item/clothes">Clothes</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/item/accessories">Accessories</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/item/babyaccessories">Baby Shower Accessories</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/login">
    <ReactBootStrap.Nav.Link href="/login">Sign In</ReactBootStrap.Nav.Link>
    </Link>
  
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default Navbar;