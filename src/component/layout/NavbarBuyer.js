import React from "react";
import { NavDropdown, Row, Col, Container } from "react-bootstrap";
import "../../Style/navbar.css";
import logo from "../../images/loogo.png";
import back3 from "../../images/back3.jpg";
var NavbarBuyer = () => {
  var signout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${back3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
      }}
    >
      <Container className="justify-content-md-center">
        <Row>

          <div
            style={{
              float: "none",
              marginLeft: "450px",
              marginRight: "100px",
              marginBottom: "20px",
              marginTop: "0",
              paddingTop: "10px",
            }}
          >
            <a href="/">
              <img src={logo} width="200" height="180" />
            </a>
          </div>
          <Col md="auto"></Col>
          <hr
            style={{
              border: "0",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          />
        </Row>
        <hr
          style={{ marginLeft: "100px", border: "0.5px solid  #FCFBED" }}
        ></hr>
        <Row style={{ color: "white" }}>
          <Col style={{ color: "white" }}>
            <NavDropdown
              title={<span style={{ color: "white" }}>Category</span>
              }
              // title="Choose Category"
              id="collasible-nav-dropdown"
              color="white"
              style={{
                margin: "0px 0px 0px 80px",
                fontSize: "20px",
                color: "white",
                padding: "0px 0px 0px 100px ",
                fontFamily: "Yanone Kaffeesatz",
                fontSize: "25px",
              }}
            >
              <NavDropdown.Item
                href="/buyer/food"
                style={{ fontFamily: "Yanone Kaffeesatz" }}
              >
                Food
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/buyer/clothes"
                style={{ fontFamily: "Yanone Kaffeesatz" }}
              >
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/buyer/babyproducts"
                style={{ fontFamily: "Yanone Kaffeesatz" }}
              >
                Baby Products
              </NavDropdown.Item>
              <NavDropdown.Item href="/buyer/accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Col>
          <Col style={{ padding: "0px 20px 0px 100px" }}>
            <a
              href="/home"
              style={{
                color: "#FCFBED",
                margin: "0px 0px 0px 20px",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
                padding: "0px 180px ",
              }}
            >
              Home
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}></Col>
          <Col>
            <NavDropdown
              title={
                <span style={{ color: "white" }}> <i class="fas fa-bars"></i></span>
              }
              color="#FCFBED"
              id="collasible-nav-dropdown"
              style={{ margin: "0px 80px 0px 0px" }}>
              <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
              <NavDropdown.Item href="/" onClick={signout}>
                Sign Out
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavbarBuyer;