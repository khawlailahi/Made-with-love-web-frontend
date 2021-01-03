import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../Style/navbar.css";
var NavbarBuyer = () => {
  var signout = () => {
    localStorage.removeItem("token");
  };
  return (
<div className="App">
<Navbar collapseOnSelect expand="lg" bg="#800000" variant="dark">
  <Navbar.Brand href="/home" >Made With Love</Navbar.Brand>
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
    <NavDropdown  id="collasible-nav-dropdown" style ={{margin :'0px 80px 0px 0px'}}>
        {/* <NavDropdown.Item href="/notification">View Notifications</NavDropdown.Item> */}
        <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
        <NavDropdown.Item href="/" onClick={signout}>Sign Out</NavDropdown.Item>
        <NavDropdown.Divider />
      
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        )
}
export default NavbarBuyer;
