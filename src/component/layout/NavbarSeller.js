import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../Style/navbar.css'
var NavbarSeller = () =>{
  return (
<div className="App">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bac="red">
  <Navbar.Brand href="/view" >Made With Love</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/view">HOME</Nav.Link>
      <NavDropdown  id="collasible-nav-dropdown">
        <NavDropdown.Item href="/orders"> Views Orders</NavDropdown.Item>
        <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
        <NavDropdown.Item href="/signOut">Sign Out</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
      {/* <Nav.Link eventKey={2} href="/profile"> */}
      <i style={{fontSize:"35px" , color:'white', padding:'0px 0px 0px 30px'}} className="fas fa-user-circle"></i>
      {/* </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        )
}
export default NavbarSeller