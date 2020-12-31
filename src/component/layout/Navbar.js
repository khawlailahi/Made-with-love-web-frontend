import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../Style/navbar.css';
var NavBar = () => {
    return(
        <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="#800000" variant="dark" style ={{width:'100%'}}>
  <Navbar.Brand href="/" >Made With Love</Navbar.Brand>
  <Navbar.Brand href="/about" >About Us</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="container-fluid">
    
    <Nav.Item className="ml-auto">
    <Nav.Link href="/login" >Login</Nav.Link>
    </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default NavBar;