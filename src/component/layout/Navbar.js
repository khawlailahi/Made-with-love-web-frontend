import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../Style/navbar.css';  

var NavBar = () => {
    return(
        <div className="App">
<<<<<<< HEAD
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/" style ={{padding:'0px 1000px 0px 0px'}}>Made With Love</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="/login">Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
=======
    <ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark" style={{backgroundColor:'#800000'}}>
  <ReactBootStrap.Navbar.Brand href="/view" style ={{padding:'0px 1140px 0px 0px'}}>Made With Love</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    
    <Link to="/about">
    <ReactBootStrap.Nav.Link href="#pricing">About Us</ReactBootStrap.Nav.Link>
    </Link>
     
    <Link to="/login">
    <ReactBootStrap.Nav.Link href="/login">Sign In</ReactBootStrap.Nav.Link>
    </Link>
  
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
>>>>>>> 79fcb5d77bd63205ede57d91c50658805394cea8
        </div>
    )
}

export default NavBar;