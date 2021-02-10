import React, { useState, useEffect } from "react";
import { storage } from "./fireConfig";
import { Control, Form } from "react-redux-form";
import { Row, Col, Container } from "react-bootstrap";
import $ from "jquery";
import down from "../images/down.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarSeller from "./layout/NavbarSeller";
import NavbarBuyer from "./layout/NavbarBuyer";
import { Button } from 'bootstrap'

function SettingProfile() {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  if (!tokenObj) { window.location = "/404" }

  if (JSON.parse(localStorage.getItem("token"))) {

    if (tokenObj.type === "buyer") var nav = <NavbarBuyer />;
    if (tokenObj.type === "seller") var nav = <NavbarSeller />;
  }
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState("");
  const [storeName, setstoreName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [data1, setData1] = useState("");
  const [data, setData] = useState("");

  const [url1, setUrl1] = useState("");

  const [deliver, setDeliver] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [counter, setCounter] = useState(false);
  const [counter2, setCounter2] = useState(false);
  const [counter3, setCounter3] = useState(false);
  const [counter4, setCounter4] = useState(false);
  const [counter5, setCounter5] = useState(false);
  const [counter6, setCounter6] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))["type"] === "buyer") {
      console.log("ggg", JSON.parse(localStorage.getItem("token"))["type"]);
      setUrl1("https://safe-lowlands-63189.herokuapp.com/buyer/getAll/");
    } else {
      setUrl1("https://safe-lowlands-63189.herokuapp.com/seller/getAll/");
    }
    console.log(url1);
    $.ajax({
      method: "GET",
      url: url1,
      contentType: "application/json",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },

      success: function (res) {
        // window.location="/settings"
        setData1(res);
        console.log(res);
        console.log(res);
        console.log(res);
        setData("yess");
      },
      error: function (err) {
        console.log(err);
      },
    });
  }, [data]);

  //>>>>>>>>>>>>>>>> SETTINGS FOR BUYER <<<<<<<<<<<<<<<//

  const buyerSettings = () => {
    if (
      JSON.parse(localStorage.getItem("token"))["type"] === "buyer" &&
      data1 !== ""
    ) {
      return (
        <div>
          {nav}
          <Row>
            <Col>
              <button
                onClick={count}
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "18px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
              >
                change Password{" "}
              </button>
              {showInput()}
              <br></br>
              <br></br>
            </Col>
            <Col>
              <button
                onClick={count3}
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "18px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
              >
                {" "}
                change PhoneNumber
              </button>
              {phonee()}
              <br></br>
            </Col>

          </Row>

          <Row>

            <Col>
              <button
                onClick={count4}
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "18px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
              >
                {" "}
                change userName
              </button>
              {user()}
              <br></br>
            </Col>
          </Row>
        </div>
      );
    }
  };
  const count = () => {
    setCounter(!counter);
  };
  const count2 = () => {
    setCounter2(!counter2);
  };
  const count3 = () => {
    setCounter3(!counter3);
  };
  const count4 = () => {
    setCounter4(!counter4);
  };

  const count5 = () => {
    setCounter5(!counter5);
  };
  const count6 = () => {
    setCounter6(!counter4);
  };
  /////>>>>>>>>> BUYER PASSWORD
  const showInput = () => {
    if (counter === true) {
      var x = (
        <div>
          <Form model="password" onSubmit={(password) => ajaxPass(password)}>
            <div className="col-md-3">
              <div className="col-md-4">
                <label htmlFor="password.oldPassword" className="form-label" style={{ fontSize: "14px" }}>
                  Old Password:
                </label>
                <Control
                  style={{
                    width: "200px",

                    height: "40px",
                  }}
                  autocomplete="off"
                  type="password"
                  model="password.oldPassword"
                  id="password.oldPassword"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="password.newPassword" className="form-label" style={{ fontSize: "14px" }}>
                  New Password:
                </label>
                <Control
                  style={{
                    width: "200px",

                    height: "40px",
                  }}
                  autocomplete="off"
                  type="password"
                  model="password.newPassword"
                  id="password.newPassword"
                  className="form-control"
                  required
                />
                <div className="col-12">
                  <button
                    style={{
                      backgroundColor: "#edb55c",
                      borderRadius: "10px",
                      border: "2px solid white",
                      padding: "10px 15px",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      );
    }
    if (counter === false) {
      var x = null;
    }
    return x;
  };
  const ajaxPass = (password) => {
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/buyer/changePassword",
      data: JSON.stringify(password),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      error: function (err) {
        console.log(password);
      },
    });
  };
  ///>>>>>> BUYER LOCATION
  const takevalue = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const ajaxLoc = () => {
    const obj = { location: location };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/buyer/location", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };

  const locationn = () => {
    if (counter2 === true) {
      return (
        <div>
          <div className="col-md-3">
            <label className="form-label">New Location :</label>
            <input
              style={{
                width: "200px",

                height: "40px",
              }}
              autocomplete="off"
              className="form-control"
              defaultValue={data1[0].fields.location}
              onChange={takevalue}
            />
          </div>
          <button
            style={{
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
            }}
            name="location"
            onClick={ajaxLoc}
          >
            Submit
          </button>
        </div>
      );
    }
  };
  ///>>>>>>>>>>> BUYER NUMBER

  const phonee = () => {
    if (counter3 === true) {
      return (
        <div>
          <div className="col-md-4" style={{
            marginLeft: "20px"
          }}>
            <label className="form-label" style={{
              fontSize: "14px"
            }}>New PhoneNumber :</label>
            <input
              style={{
                width: "200px",

                height: "40px",
              }}
              autocomplete="off"
              className="form-control"
              defaultValue={data1[0].fields.phonenumber}
              onChange={takevaluePH}
            />
          </div>
          <button
            style={{
              marginLeft: "60px",
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
            }}
            onClick={ajaxphone}
          >
            Submit
          </button>
        </div>
      );
    }
  };
  const takevaluePH = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };

  const ajaxphone = () => {
    const obj = { phoneNumber: phoneNumber };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/buyer/phoneNumber/", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };
  ////>>>>>> BUYER USERNAME 
  const ajaxUN = () => {
    const obj = { userName: username };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/buyer/userName", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },

    });
  };
  const takevalueUN = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const user = () => {
    if (counter4 === true) {
      return (
        <div>
          <div className="col-md-3">
            <label className="form-label" >New userName :</label>
            <input
              style={{
                width: "200px",

                height: "40px",
              }}
              autocomplete="off"
              className="form-control"
              defaultValue={data1[0].fields.username}
              onChange={takevalueUN}
            />
          </div>
          <button
            style={{
              backgroundColor: "#edb55c",
              marginLeft: "60px",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
            }}
            onClick={ajaxUN}
          >
            Submit
          </button>
        </div>
      );
    }
  };

  //>>>>>>>>>>>>>>>> SETTINGS FOR SELLER <<<<<<<<<<<<<<<//

  const sellerSettings = () => {
    if (JSON.parse(localStorage.getItem("token"))["type"] === "seller") {
      return (
        <div>
          {nav}
          <Row style={{ margin: "0px 40px 0px 40px" }}>
            <Col>
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "20px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
                onClick={count}
              >
                Change Password{" "}
              </button>
              {showInputPass()}
              <br></br>
              <br></br>
            </Col>
            <Col>
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "20px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
                onClick={count3}
              >
                {" "}
                Change storeName
              </button>
              {storeNamee()}
              <br></br>
            </Col>
            <Col>
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "20px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
                onClick={count2}
              >
                {" "}
                Change Location
              </button>
              {locationn2()}
              <br></br>
            </Col>
          </Row>
          <Row style={{ margin: "20px 40px 0px 40px" }}>
            <Col>
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "20px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
                onClick={count4}
              >
                {" "}
                Change Description
              </button>
              {descriptionn()}
              <br></br>
            </Col>
            <Col>
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "20px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
                onClick={count5}
              >
                {" "}
                Change Deliver Order WithIn:
              </button>
              {deliverrr()}
              <br></br>
            </Col>
            <Col>
              <button
                style={{
                  borderRadius: "10px",
                  border: "2px solid white",
                  fontSize: "20px",
                  padding: "10px 25px",
                  fontFamily: "Yanone Kaffeesatz",
                  marginTop: "50px",
                  width: "250px",
                }}
                onClick={count6}
              >
                {" "}
                Change Your Store Image:
              </button>
              {imagee()}
              <br></br>
            </Col>
          </Row>
        </div>
      );
    }
  };
  /////>>>>>>>> SELLER PASSWORD
  const showInputPass = () => {
    if (counter === true) {
      var x = (
        <div>
          <Form
            model="password"
            onSubmit={(password) => ajaxPassword(password)}
          >
            <div className="col-md-3">
              <div className="col-md-4">
                <label htmlFor="password.oldPassword" className="form-label">
                  Old Password:
                </label>
                <Control
                  style={{
                    width: "200px",

                    height: "40px",
                  }}
                  autocomplete="off"
                  type="password"
                  model="password.oldPassword"
                  id="password.oldPassword"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3" >
                <label htmlFor="password.newPassword" className="form-label">
                  New Password:
                </label>
                <Control
                  style={{
                    width: "200px",

                    height: "40px",
                  }}
                  autocomplete="off"
                  type="password"
                  model="password.newPassword"
                  id="password.newPassword"
                  className="form-control"
                  required
                />
                <div className="col-12">
                  <button
                    style={{
                      backgroundColor: "#edb55c",
                      borderRadius: "10px",
                      border: "2px solid white",
                      padding: "10px 15px",
                      marginLeft: "45px"
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      );
    }
    if (counter === false) {
      var x = null;
    }
    return x;
  };
  const ajaxPassword = (password) => {
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/changePassword",
      data: JSON.stringify(password),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(password);
      },
    });
  };

  ////>>>>>>>>>> SELLER STORE NAME
  const storeNamee = () => {
    if (counter3 === true) {
      return (
        <div>
          <div className="col-md-3">
            <label style={{ fontSize: "15px" }}>New storeName :</label>
            <input
              style={{
                width: "200px",

                height: "40px",
              }}
              autocomplete="off"
              className="form-control"
              defaultValue={data1[0].fields.store_name}
              onChange={takevalueSN}
            />
          </div>
          <button
            style={{
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
              marginLeft: "70px"
            }}
            onClick={ajaxSN}
          >
            Submit
          </button>
        </div>
      );
    }
  };
  const takevalueSN = (e) => {
    setstoreName(e.target.value);
    console.log(storeName);
  };

  const ajaxSN = () => {
    const obj = { storeName: storeName };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/storeName", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };
  ////////>>>>>> SELLER LOCATION
  const locationn2 = () => {
    if (counter2 === true) {
      return (
        <div>
          <div className="col-md-3">
            <label className="form-label" >New Location :</label>
            <input
              style={{
                width: "200px",

                height: "40px",
              }}
              autocomplete="off"
              className="form-control"
              defaultValue={data1[0].fields.location}
              onChange={takevalueLoc}
            />
          </div>
          <button
            style={{
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
              marginLeft: "70px"
            }}
            name="location"
            onClick={ajaxLoca}
          >
            Submit
          </button>
        </div>
      );
    }
  };

  const takevalueLoc = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const ajaxLoca = () => {
    const obj = { location: location };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/location", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };

  ///////>>>>>>>> SELLER DESCRIPTION

  const descriptionn = () => {
    if (counter4 === true) {
      return (
        <div>
          <div className="col-md-3">
            <label className="form-label" style={{ fontSize: "14px" }}>New Description :</label>
            <input
              style={{
                width: "200px",

                height: "40px",
              }}
              autocomplete="off"
              className="form-control"
              defaultValue={data1[0].fields.description}
              onChange={takevalueD}
            />
          </div>
          <button
            style={{
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
              marginLeft: "70px"
            }}
            onClick={ajaxD}
          >
            Submit
          </button>
        </div>
      );
    }
  };

  const takevalueD = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const ajaxD = () => {
    const obj = { description: description };

    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/description", //fix it later
      headers: { 'Authorization': JSON.parse(localStorage.getItem('token'))['token'] },
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };
  ///////>>>>>> SELLER DELIEVERY TIME



  const deliverrr = () => {
    if (counter5 === true) {
      return (
        <div>
          <label className="form-label">Change Delivery Time:</label>
          <br></br>
          <select
            className="form-select"
            onChange={takevalueDe}
            required
            style={{
              width: "200px",

              height: "40px",
            }}
            autocomplete="off"
          >
            <option selected disabled value="">
              Choose The Type
            </option>
            <option value="12 Hours">12 Hours</option>
            <option value="24 Hours">24 Hours</option>
            <option value="Day">Day</option>
          </select>

          <button
            style={{
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
              marginLeft: "70px"
            }}
            name="location"
            onClick={ajaxDe}
          >
            Submit
          </button>
          <br></br>
        </div>
      );
    }
  };
  const ajaxDe = () => {
    const obj = { delivery: deliver };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/delivery", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };
  const takevalueDe = (e) => {
    setDeliver(e.target.value);
    console.log(deliver);
  };

  ////>>>>> SELLER IMAGE
  const imagee = () => {
    if (counter6 === true) {
      return (
        <div>
          <input
            style={{
              width: "220px",

              height: "40px",
            }}
            autocomplete="off"
            type="file"
            className="form-control"
            aria-label="file example"
            onChange={uploadImage}
            required
          />
          {tr2()}
          <button
            style={{
              backgroundColor: "#edb55c",
              borderRadius: "10px",
              border: "2px solid white",
              padding: "10px 15px",
              marginLeft: "70px"
            }}
            name="location"
            onClick={ajaxImage}
          >
            Submit
          </button>
          <br></br>
        </div>
      );
    }
  };

  const handleUpload = (e) => {
    console.log(this);
    const uploadTask = storage.ref(`imagee/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => { },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("imagee")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };
  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const tr2 = () => {
    console.log(url);
    if (image !== "") {
      return (
        <div>
          {url ?
            <img src={url} width="200" height="180" /> : null}
          <input type="button" value="Upload" onClick={handleUpload} />
        </div>
      );
    }
  };
  const ajaxImage = () => {
    const obj = { image: url };
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/image", //fix it later
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function () {
        console.log("success");
      },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")).token,
      },
      error: function (err) {
        console.log(obj);
      },
    });
  };
  return (
    <div>
      <div>{buyerSettings()}</div>
      <div>{sellerSettings()}</div>
      <div className="col-12">
        <br />
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "10px",
            fontSize: "30px",
            marginLeft: "700px",
            border: "2px solid white",
            padding: "10px 15px",
          }}
          onClick={() => {
            if (JSON.parse(localStorage.getItem("token"))["type"] === "buyer") {
              window.location = '/home'
            }
            if (JSON.parse(localStorage.getItem("token"))["type"] === "seller") {
              window.location = `/seller/profile/${JSON.parse(localStorage.getItem("token"))["id"]}`
            }
          }}

        >
          Finished
                  </button>
      </div>

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
export default SettingProfile;
