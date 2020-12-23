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
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view" >HOME</ReactBootStrap.Navbar.Brand></Link>
    <Link to="/profile"><ReactBootStrap.Navbar.Brand href="/signout"  className="glyphicon glyphicon-user" ><i style={{fontSize:"35px" , color:'white'}} className="fas fa-user-circle"></i></ReactBootStrap.Navbar.Brand></Link>
    
   
      <ReactBootStrap.NavDropdown  title=  {<i className="fas fa-bars"></i>} className="glyphicon glyphicon-log-in" style ={{}}>
        <ReactBootStrap.NavDropdown.Item href="/orders">Orders</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/setting">Setting</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/signOut">SignOut</ReactBootStrap.NavDropdown.Item>
      

        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
     
        
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


        </div>
        )
}
export default NavbarSeller