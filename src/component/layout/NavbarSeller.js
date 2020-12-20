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
    <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view" style ={{padding: '0px 20px 0px 0px'}}>Made With Love</ReactBootStrap.Navbar.Brand></Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view" style ={{padding: '0px 100px 0px 0px'}}>HOME</ReactBootStrap.Navbar.Brand></Link>
   
   
   
        <ReactBootStrap.NavDropdown title=  {<i class="fas fa-bars"></i>}  id="collasible-nav-dropdown" style ={{margin:'0px 0px 0px 800px', padding:"0px 30px 0px 0px"}}>
        <ReactBootStrap.NavDropdown.Item href="/Orders">Orders</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/Setting">Setting</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/SignOut">SignOut</ReactBootStrap.NavDropdown.Item>
      

        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
      <Link to="/profile"><i style={{fontSize:"35px" , color:'black'}} className="fas fa-user-circle"></i></Link>
      
    
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


        </div>
        )
}
export default NavbarSeller