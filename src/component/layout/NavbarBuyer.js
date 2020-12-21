import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../../Style/navbar.css'
var NavbarBuyer = () =>{
  return (
<div className="App">

    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
    <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view">Made With Love</ReactBootStrap.Navbar.Brand></Link>
  
    
  

      
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.NavDropdown title="Categories" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/buyer/food">Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/buyer/clothes">Clothes</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/buyer/accessories">Accessories</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/buyer/babyproducts">Baby Shower Accessories</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
     
    <ReactBootStrap.Nav className="ml-auto"> 
    
    <ReactBootStrap.Navbar.Brand href="/signout"  class="glyphicon glyphicon-user" >SignOut</ReactBootStrap.Navbar.Brand>
    

      
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


        </div>
        )
}
export default NavbarBuyer;