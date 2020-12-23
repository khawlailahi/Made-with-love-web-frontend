import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../../Style/navbar.css'
var NavbarSeller = () =>{
  return (
<div className="App">

   <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark" >
    <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view" >Made With Love</ReactBootStrap.Navbar.Brand></Link>
     <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view"  style={{padding:'0px 1100px 0px 0px'}}>HOME</ReactBootStrap.Navbar.Brand></Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    
    <ReactBootStrap.NavDropdown  class="nav navbar-nav float-md-right"   >
        <ReactBootStrap.NavDropdown.Item href="/orders"> Views Orders</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/setting">Setting</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/signOut">Sign Out</ReactBootStrap.NavDropdown.Item>
      

        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
     
      <Link to="/profile"><ReactBootStrap.Navbar.Brand href="/signout"  className="glyphicon glyphicon-user"  ><i style={{fontSize:"35px" , color:'white', padding:'0px 0px 0px 30px'}} className="fas fa-user-circle"></i></ReactBootStrap.Navbar.Brand></Link>
     
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


        </div>
        )
}
export default NavbarSeller