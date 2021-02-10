
import $ from "jquery";
import React, { component } from "react";
import { Control, Form } from "react-redux-form";
import back3 from "../images/back3.jpg";
import logo from "../images/loogo.png";
import heart from "../images/heart.jpg";
import down from "../images/down.jpg";
import { Link } from "react-router-dom";
import { Card, NavDropdown, Row, Col, Container } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import app from './fireConfig'

if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller') {
  var database = app.database().ref('notification')
  console.log(database)
  var childkey;
  var value;
  var exist = false
}
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: ""
    }
  }
  ajax(login) {
    var that = this
    //login ajax without social media
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/login", //fix it later
      data: JSON.stringify(login),
      contentType: "application/json",
      success: function (res) {
        localStorage.setItem("token", JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));
        if (JSON.parse(localStorage.getItem('token'))["type"] === 'buyer') {
          window.location = "/home"
        }
        if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller') {

          var database = app.database().ref('notification')
          console.log(database)
          var childkey;
          var value;
          var exist = false
          app.database().ref('notification').on("value", function (snapshot) {

            snapshot.forEach(function (childSnapshot) {
              childSnapshot.forEach(function (child) {

                if (Number(child.key) === JSON.parse(localStorage.getItem('token'))['id']) {
                  console.log("iiin")
                  exist = true;
                  console.log("done")
                  childkey = childSnapshot.key;
                  value = Number(child.val())
                  localStorage.setItem("not2", childkey + "")

                  if (tokenObj.type === "buyer") window.location = "/home";
                  //if the user if a seller
                  if (tokenObj.type === "seller")
                    window.location = `/seller/profile/${tokenObj["id"]}`;
                }
                console.log("innnn")
              });

            })
            if (!exist) {
              app.database().ref('notification').push({ [JSON.parse(localStorage.getItem('token'))['id']]: 0 })
              console.log("innnn")

              if (tokenObj.type === "buyer") window.location = "/home";
              //if the user if a seller
              if (tokenObj.type === "seller")
                window.location = `/seller/profile/${tokenObj["id"]}`;
            }

          });



        }

      },
      error: function (err) {
        that.setState({ alerts: err.responseText }, () => { console.log(that.state.alerts) })

        // alert(err.responseJSON.Error);
        setTimeout(() => {
          window.location.reload()
        }, 300);
      },
    });
  }
  //login ajax with google
  responseGoogle(response) {
    var that = this
    console.log(response, "google response");
    console.log(response.profileObj, "profiiile");
    var obj = {};
    obj.email = response.profileObj["email"];
    obj.password = "";
    obj.userName = response.profileObj["givenName"];
    obj.location = "";
    obj.phoneNumber = "";

    console.log(obj);
    $.ajax({
      url: "http://127.0.0.1:8000/login",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",

      success: function (res) {
        localStorage.setItem("token", JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));


        if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller') {

          var database = app.database().ref('notification')
          console.log(database)
          var childkey;
          var value;
          var exist = false
          app.database().ref('notification').on("value", function (snapshot) {

            snapshot.forEach(function (childSnapshot) {
              childSnapshot.forEach(function (child) {

                if (Number(child.key) === JSON.parse(localStorage.getItem('token'))['id']) {
                  console.log("iiin")
                  exist = true;
                  console.log("done")
                  childkey = childSnapshot.key;
                  value = Number(child.val())
                  localStorage.setItem("not2", childkey + "")
                  if (tokenObj.type === "buyer") window.location = "/home";
                  //if the user if a seller
                  if (tokenObj.type === "seller")
                    window.location = `/seller/profile/${tokenObj["id"]}`;
                }
              });

            })
            if (!exist) {
              app.database().ref('notification').push({ [JSON.parse(localStorage.getItem('token'))['id']]: 0 })
              if (tokenObj.type === "buyer") window.location = "/home";
              //if the user if a seller
              if (tokenObj.type === "seller")
                window.location = `/seller/profile/${tokenObj["id"]}`;

            }
          });

        }

        window.location = `/home`

      },
      error: function (err) {
        that.setState({ alerts: err.responseText }, () => { console.log(that.state.alerts) })

        // alert(err.responseJSON.Error);
        setTimeout(() => {
          window.location.reload()
        }, 300);
      },
    });
  }
  //login ajax without facebook

  responseFacebook(response) {
    var that = this
    console.log(response);
    var obj = {};
    obj.email = response.email;
    obj.password = "";
    obj.userName = response.name;
    obj.location = "";
    obj.phoneNumber = "";

    console.log(obj);
    $.ajax({
      url: "http://127.0.0.1:8000/login",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",

      success: function (res) {
        localStorage.setItem("token", JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));

        if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller') {

          var database = app.database().ref('notification')
          console.log(database)
          var childkey;
          var value;
          var exist = false
          app.database().ref('notification').on("value", function (snapshot) {

            snapshot.forEach(function (childSnapshot) {
              childSnapshot.forEach(function (child) {

                if (Number(child.key) === JSON.parse(localStorage.getItem('token'))['id']) {
                  console.log("iiin")
                  exist = true;
                  console.log("done")
                  childkey = childSnapshot.key;
                  value = Number(child.val())
                  localStorage.setItem("not2", childkey + "")
                  if (tokenObj.type === "buyer") window.location = "/home";
                  //if the user if a seller
                  if (tokenObj.type === "seller")
                    window.location = `/seller/profile/${tokenObj["id"]}`;
                }
              });

            })
            if (!exist) {
              app.database().ref('notification').push({ [JSON.parse(localStorage.getItem('token'))['id']]: 0 })
              if (tokenObj.type === "buyer") window.location = "/home";
              //if the user if a seller
              if (tokenObj.type === "seller")
                window.location = `/seller/profile/${tokenObj["id"]}`;
            }

          });



        }

      },
      error: function (err) {
        that.setState({ alerts: err.responseText }, () => { console.log(that.state.alerts) })

        // alert(err.responseJSON.Error);
        setTimeout(() => {
          window.location.reload()
        }, 3000);
      },
    });
  }

  render() {
    if (this.state.alerts)

      if (this.state.alerts)
        var x = <div class="alert alert-danger" role="alert">
          {this.state.alerts}
        </div>

    return (
      <div>
        <div
          className="creative-tim-logo"
          style={{
            backgroundPosition: "center",
            backgroundImage: `url(${back3})`,
            backgroundSize: "cover",
            height: "300px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Container className="justify-content-md-center">
            <Row>
              {/* <Col xs lg="3">
      1 of 3
    </Col> */}
              <div
                style={{
                  float: "none",
                  marginLeft: "500px",
                  marginRight: "100px",
                  marginBottom: "20px",
                  marginTop: "0",
                  paddingTop: "10px",
                }}
              >
                <a href="/">
                  <img src={logo} width="150" height="120" />
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
            <Row>
              <Col style={{ padding: "0px 550px 0px 550px" }}>
                <a
                  href="/"
                  style={{
                    color: "#FCFBED",
                    fontSize: "28px",
                    fontFamily: "Yanone Kaffeesatz",
                  }}
                >
                  Home
                </a>
              </Col>
              <Col style={{ padding: "0px 20px 0px 20px" }}></Col>
            </Row>
            <Row style={{ padding: "40px" }}>
              <Col>
                <div
                  style={{
                    float: "none",
                    marginLeft: "360px",
                    marginRight: "100px",
                    marginTop: "100px",
                  }}
                >
                  <a href="/">
                    <img src={heart} width="200" height="180" />
                  </a>
                </div>
              </Col>
            </Row>
            <br />
            <br />

            <br />
            <br />

            <Row>
              <Col>
                <h2
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    float: "none",
                    marginRight: "400px",
                    marginLeft: "500px",
                    fontSize: "60px",
                    marginTop: "-300px",
                  }}
                >
                  Login
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        {x}
        <Card
          style={{
            width: "500px",
            margin: "200px auto",
            height: "500px",
            padding: "60px 20px 0px 20px",
          }}
        >
          <div style={{ marginLeft: "-40px" }}>
            <Form
              className="row g-3 needs-validation"
              model="login"
              type="submit"
              onSubmit={(login) => this.ajax(login)}
              novalidate
            >
              <div>
                <label
                  for="validationCustom01"
                  className="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "28px",
                    margin: "0px 80px 0px 80px",
                  }}
                >
                  Email address
                </label>
                <b></b>
                <br></br>
                <Control.text
                  autocomplete="off"
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  model="login.email"
                  id="login.email"
                  required
                  style={{
                    width: "400px",
                    margin: "0px 80px 0px 80px",
                    height: "60px",
                  }}
                />
                <div className="valid-feedback">Looks good!</div>
                <b></b>
                <br></br>
                <label
                  for="validationCustom01"
                  className="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "28px",
                    margin: "0px 80px 0px 80px",
                  }}
                >
                  Password
                </label>
                <Control.text
                  autocomplete="off"
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  model="login.password"
                  id="login.password"
                  required
                  style={{
                    width: "400px",
                    margin: "0px 80px 0px 80px",
                    height: "60px",
                  }}
                />
                <div className="valid-feedback">Looks good!</div>
                <b></b>
                <br></br>
                <div >
                  <button
                    type="submit"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "25px",
                      padding: "6px 28px",
                      fontFamily: "Yanone Kaffeesatz",
                      margin: "15px 60px 0px 60px",
                    }}
                  >
                    Log in
                  </button>
                </div>

                <div style={{ padding: "20px", marginLeft: "240px", marginTop: "-65px", width: "100px" }}><GoogleLogin
                  clientId="618615503064-dlp8abcbs4u3l9gd0r3g41hrdigirah7.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  onClick={this.responseGoogle}
                />
                </div></div>
              <br />
              <br />
              {/* <FacebookLogin
                appId="3491517994290436"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="my-facebook-button-class"
                icon={<i class="fab fa-facebook-square"></i>}
                style={{ padding: "20px" }}
              /> */}
              <br />
              <br />
            </Form>
          </div>{" "}
        </Card>
        <div
          style={{
            width: "100%",
            marginTop: "150px",
            height: "600px",
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row>
              <Col style={{ padding: "130px" }}>
                <h3 style={{ color: "#fcfbed" }}>Have a Question?</h3>
                <br />
                <i
                  className="far fa-clock fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  Saturday - Thursday: 09:00AM - 18:30PM
                </i>
                <br />
                <br />
                <i
                  class="fas fa-map-marker-alt fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  Jordan,Amman
                </i>
                <br />
                <br />
                <i
                  class="fas fa-phone-alt fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  +962796720978
                </i>
                <br />
                <br />
                <i
                  class="fas fa-envelope fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  <a
                    href="mailto:lovemadewith817@gmail.com"
                    style={{ color: "#fcfbed" }}
                  >
                    {" "}
                    Made_With_Love
                  </a>
                </i>
              </Col>
              <Col style={{ padding: "130px" }}>
                <h3 style={{ color: "#fcfbed" }}>Informations</h3>
                <br />
                <Link to="/about">
                  <i
                    class="far fa-sticky-note fa-2x"
                    style={{ fontSize: "20px", color: "#fcfbed" }}
                  >
                    {" "}
                    About Us
                  </i>
                </Link>
                <br />
                <br />
                <Link to="/contactUs">
                  <i
                    class="far fa-sticky-note fa-2x"
                    style={{ fontSize: "20px", color: "#fcfbed" }}
                  >
                    {" "}
                    Contact Us
                  </i>
                </Link>
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Login;