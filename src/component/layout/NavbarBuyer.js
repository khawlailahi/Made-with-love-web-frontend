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
<ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark" >
    <Link to="/view"><ReactBootStrap.Navbar.Brand href="/view" >Made With Love</ReactBootStrap.Navbar.Brand ></Link>
  
    
  

      
  <ReactBootStrap.Navbar.Toggle />
  
  
  <ReactBootStrap.NavDropdown title="Categories" class="nav navbar-nav float-md-right"style={{color:'white'}} >
        <ReactBootStrap.NavDropdown.Item href="/buyer/food">Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/buyer/clothes">Clothes</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/buyer/accessories">Accessories</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/buyer/babyproducts">Baby  Accessories</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
     
    <ReactBootStrap.Nav className="ml-auto"> 
    
    <Link to ='/view'><ReactBootStrap.Navbar.Brand href="/signout" class="navbar-brand d-none d-lg-inline-block" onClick ={()=>{console.log('Sign Out')}}>Sign Out</ReactBootStrap.Navbar.Brand></Link>
    

      
    </ReactBootStrap.Nav>
  
</ReactBootStrap.Navbar>


        </div>
        )
}
export default NavbarBuyer;