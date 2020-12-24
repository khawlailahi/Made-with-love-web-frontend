import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../Style/navbar.css'
var NavbarBuyer = () =>{
  return (
<div className="App">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/view" >Made With Love</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/buyer/food">Food</NavDropdown.Item>
        <NavDropdown.Item href="/buyer/clothes">Clothes</NavDropdown.Item>
        <NavDropdown.Item href="/buyer/accessories">Accessories</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/buyer/babyproducts">Baby  Accessories</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/view"onClick ={()=>{console.log('Sign Out')}}>Sign Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        )
}
export default NavbarBuyer;