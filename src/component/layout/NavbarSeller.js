import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../Style/navbar.css";
var NavbarSeller = () => {
  var signout = () => {
    localStorage.removeItem("token");
  };
  var id = JSON.parse(localStorage.getItem("token"))["id"];
  var url = `/seller/profile/${id}`;
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bac="red">
        <Navbar.Brand href="/home">Made With Love</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link href="/home" style={{ padding: "22px 880px 0px 0px" }}>
            HOME
          </Nav.Link>
          <Nav.Link
            href={url + ""}
            style={{ fontSize: "20px", padding: "15px " }}
          >
            Profile
            {/* <i style={{fontSize:"35px" , color:'white', padding:'0px 0px 0px 30px'}} className="fas fa-user-circle"></i> */}
          </Nav.Link>
          <NavDropdown id="collasible-nav-dropdown" style={{ padding: "15px" }}>
            <NavDropdown.Item href="/orderList"> Views Orders</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
            <NavDropdown.Item href="/" onClick={signout}>
              Sign Out
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavbarSeller;
