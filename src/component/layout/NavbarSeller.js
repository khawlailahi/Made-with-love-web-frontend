import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../Style/navbar.css'
var NavbarSeller = () =>{
  var signout=()=>{
    localStorage.removeItem('token')
  }
  return (
<div className="App">

<Navbar collapseOnSelect expand="lg" bg="#800000" variant="dark" style ={{width:'100%'}}>
  <Navbar.Brand href="/" style ={{}}>Made With Love</Navbar.Brand>
  <Navbar.Brand href="/view" >HOME</Navbar.Brand>
      <Navbar.Brand href="/profile" >Profile
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  <Nav className="mr-auto">
      <NavDropdown title="category" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/orders"> Views Orders</NavDropdown.Item>
        <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
        <NavDropdown.Item href="/" onClick={signout}>Sign Out</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
        </Nav>
     </Navbar.Collapse>   
   </Navbar>
        </div>
        )
}
export default NavbarSeller