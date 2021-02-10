
import { Component } from "react";
import React from "react";
import "../../Style/navbar.css";
import app from "../fireConfig";
import "../../Style/navbar.css";
import rose from "../../images/rose.png";
import logo11 from "../../images/logo11.png";
import back from "../../images/back.jpg";
import heart from "../../images/heart.jpg";
import { Navbar, NavDropdown, Row, Col, Container } from "react-bootstrap";
import "../../Style/navbar.css";
import { Link } from "react-router-dom";
import loogo from "../../images/loogo.png";
import back3 from "../../images/back3.jpg";
if (
  localStorage.getItem("token") &&
  JSON.parse(localStorage.getItem("token"))["type"] === "seller"
) {
  var id = JSON.parse(localStorage.getItem("token"))["id"];
  var url = `/seller/profile/${id}`;
}
class NavbarSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      not: 0,
    };
  }

  componentDidMount() {
    var that = this;

    if (
      localStorage.getItem("token") &&
      JSON.parse(localStorage.getItem("token"))["type"] === "seller"
    ) {
      console.log("111111111111111111111")
      var store = JSON.parse(localStorage.getItem("token"))["id"];
      var child = localStorage.getItem("not2");
      console.log(store, child, "heeeeeelp");
      app
        .database()
        .ref("notification")
        .child(child + "")
        .on("value", (snap) => {
          console.log(child);
          console.log("iiiin");
          if (snap.val()) {
            console.log(
              snap.val()[JSON.parse(localStorage.getItem("token"))["id"]],
              "vaaaaal"
            );
            that.setState({
              not: snap.val()[JSON.parse(localStorage.getItem("token"))["id"]],
            });
          }
        });
    }
  }
  signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("not2");
  };
  render() {
    if (this.state.not) {
      var notification = (
        <Link to="/orderlist"> <Navbar.Brand style={{ color: "white", fontFamily: "Yanone Kaffeesatz" }}>
          {this.state.not}
          <i class="fas fa-bell" style={{ color: "#FFC966" }}></i>
        </Navbar.Brand></Link>
      );
    }
    return (
      <div
        style={{
          width: "100%",
          height: "440px",
          backgroundImage: `url(${back3})`,
        }}
      >
        <Container>
          <Row className="justify-content-md-center">
            <div
              style={{
                float: "none",
                marginLeft: "510px",
                marginRight: "100px",
                marginBottom: "20px",
                marginTop: "0",
                paddingTop: "10px",
              }}
            >
              <a href="/">
                <img src={loogo} width="200" height="180" />
              </a>
            </div>

            <hr
              style={{
                border: "0",
                borderTop: "1px solid red",
              }}
            />
          </Row>
          <hr style={{ marginLeft: "170px", border: "0.5px solid white" }}></hr>
          <Row style={{ marginLeft: "90px" }}>
            <Col style={{ padding: "0px 20px 0px 120px" }}>
              <a
                href="/home"
                style={{
                  color: "#FCFBED",
                  fontSize: "23px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Home
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 120px" }}>
              <a
                href={url + ""}
                style={{
                  color: "#FCFBED",
                  fontSize: "23px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Profile
              </a>
            </Col>

            <Col>
              <a
                href={url + ""}
                style={{
                  color: "#FCFBED",
                  fontSize: "23px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                {notification}
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}>
              <a
                href="/orderList"
                style={{
                  color: "#FCFBED",
                  fontSize: "23px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                View Orders
              </a>
            </Col>
            <NavDropdown
              title={
                <span style={{ color: "white" }}> <i class="fas fa-bars"></i></span>
              }
              id="collasible-nav-dropdown"
              style={{ color: "#826105" }}
            >
              <NavDropdown.Item href="/settings" style={{ color: "#826105" }}>
                Setting
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/"
                style={{ color: "#826105" }}
                onClick={this.signout}
              >
                Sign Out
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NavbarSeller;
