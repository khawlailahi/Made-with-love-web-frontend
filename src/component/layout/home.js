import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import app from "../fireConfig"
import { useState, useEffect } from "react";
import $ from "jquery";
import NavbarSeller from "./NavbarSeller";
import NavbarBuyer from "./NavbarBuyer";
import down from "../images/down.jpg";
var action = { type: "food_category" };
var actionclothes = { type: "clothes_category" };
var actionbaby = { type: "babyshower_category" };
var actionacc = { type: "accesories_category" };

const getcategoryfood = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/food");
  //if the user if a seller
  if (tokenObj.type === "seller") window.location.replace(`/seller/food`);
  return action;
};

const getcategoryclothes = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/clothes");
  //if the user if a seller
  if (tokenObj.type === "seller") window.location.replace(`/seller/clothes`);
  return actionclothes;
};
const getcategorybaby = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/babyproducts");
  //if the user if a seller
  if (tokenObj.type === "seller")
    window.location.replace(`/seller/babyproducts`);
  return actionbaby;
};
const getcategoryacc = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/accessories");
  //if the user if a seller
  if (tokenObj.type === "seller")
    window.location.replace(`/seller/accessories`);
  return actionacc;
};
// var mapDispatchToProps = (dispatch) =>{
//     return {

//     //     onclickCat : (cat) => {
//     //         action = {type : 'change_category', text:cat}
//     //         dispatch(action);

//     //      }
//     // }
//     const
// }

export default function Home(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [tr1, settr1] = useState(null);
  const [populor, setData1] = useState([])

  useEffect(() => {
    var max = 0;
    var maxId
    var database = app.database().ref('notification')
    var superStore;
    database.once("value", function (snapshot) {

      snapshot.forEach(function (childSnapshot) {
        childSnapshot.forEach(function (child) {
          // if the store id exist in firebase  increment number of orders

          var x = Number(child.val())
          if (x >= max) {
            max = x;
            maxId = child.key
          }
        });

      })
      superStore = maxId;
      console.log(maxId, "maaxxx")
      $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:8000/seller/profile/' + maxId,
        contentType: "application/json",
        headers: { 'Authorization': JSON.parse(localStorage.getItem('token'))['token'] },

        success: function (res) {
          console.log(res, "supeeeeeeeer")
          setData(JSON.parse(res))
          settr1(true)
          console.log(data, "imaaaavjvjvaage")
        },
        error: function (err) {

        }
      })
    })

    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:8000/populer',
      contentType: "application/json",
      headers: { 'Authorization': JSON.parse(localStorage.getItem('token'))['token'] },

      success: function (res) {

        //filter descendingly 
        var data = res.sort(function (a, b) {
          return (b.fields.review) - (a.fields.review);
        })

        data = data.slice(0, 4)
        setData1(data)
        settr1(true)
        console.log(Array.isArray(res))
      },
      error: function (err) {
        console.log(err, "errrr")
      }
    })


  }, [tr1]
  )


  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj["type"]);
  if (tokenObj.type === "buyer") var nav = <NavbarBuyer />;
  if (tokenObj.type === "seller") var nav = <NavbarSeller />;
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj["type"]);
  if (tokenObj.type === "buyer") var nav = <NavbarBuyer />;
  if (tokenObj.type === "seller") var nav = <NavbarSeller />;


  return (

    <div>
      {nav}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container style={{ marginTop: "200px" }}>
        <Row>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "-200px",
                  transition: "width 2s",
                }}
              >
                <Link to="/buyer/food">
                  <Carousel

                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryfood());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Third slide"
                        width="400px"
                        height="300px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1448131063153-f1e240f98a72?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1448&q=80"
                        alt="Third slide"
                        width="400px"
                        height="300px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
            </div>
          </Col>
          <Col>


            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "600px",
                  height: "700px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",

                  marginLeft: "-150px",
                }}
              >

                <Carousel

                  onClick={() => {
                    console.log("clickeeed");

                  }}
                >
                  {data[0] ? <Carousel.Item >
                    <img
                      style={{
                        border: "solid  white 3px",
                        borderRadius: "10px",
                      }}
                      className="d-block w-100"
                      src={data[0].fields.image + ''}
                      alt="Third slide"
                      width="600px"
                      height="700px"
                    />
                    <Link to={"seller/visit/" + data[0].pk}> <Carousel.Caption>
                      <h2 style={{ color: "black", marginBottom: "500px", backgroundColor: "pink" }}>Our Super Store :</h2>
                      <h3 style={{ color: "black", marginBottom: "20px", backgroundColor: "white" }}>{data[0].fields.store_name}</h3>
                      <h5 style={{ color: "black", marginBottom: "10px", backgroundColor: "white" }}>{data[0].fields.description}</h5>
                    </Carousel.Caption></Link>
                  </Carousel.Item>
                    //while loading the super store show a spinner
                    : <Carousel.Item >
                      <h2 style={{ color: "White", marginTop: "200px", backgroundColor: "orange", fontSize: "50px", textAlign: "center", padding: "20px , 20px , 10px , 10px" }}> The Store With The Most Orders Is ...</h2><br /><br /><div class="spinner-border " style={{ width: "7rem", height: "7rem", marginBottom: "100px", marginLeft: "250px", color: "orange" }}></div></Carousel.Item >}
                </Carousel>

              </div>
            </div>
          </Col>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "100px",
                }}
              >
                <Link to="/buyer/clothes">
                  <Carousel

                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryclothes());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1534337711732-1c9ae62389e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        width="400px"
                        height="300px"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1603321582010-d342bd5a2e07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="col-sm-6" className="container-fluid">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  marginLeft: "-200px",
                  cursor: "pointer",
                  marginTop: "-300px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                }}
              >
                <Link to="/buyer/accessories">
                  <Carousel

                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryacc());
                    }}
                  >
                    <Carousel.Item interval={1000} >
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1521120098171-0400b4ec1319?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width="400px"
                        height="300px"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3> Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1551026965-10a65509886d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
          <Col>
            <div className="col-sm-6">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "400px",
                  height: "300px",
                  cursor: "pointer",
                  marginTop: "-300px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "300px",
                  paddingBottom: "100px",
                }}
              >
                <Link to="/buyer/babyproducts">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategorybaby());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1565058528605-670489ab6f6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhYnklMjAlMjB3b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby products</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000} >
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1560506840-ec148e82a604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhYnklMjBjbG90aGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        width="400px"
                        height="300px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby productsl</h3>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://i1.wp.com/dadfixeseverything.com/wp-content/uploads/2019/01/wash_baby_clothes.jpg?resize=600%2C400&ssl=1"
                        width="400px"
                        height="300px"

                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby products</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />


      <Container>
        <Row style={{ marginTop: "25px" }}>
          <Col>
            <hr
              style={{
                color: "black",
                marginLeft: "-5px",
                width: "100%",
                borderWidth: "2px",
                height: "5px",
              }}
            />
          </Col>
          <Col>
            <h3 style={{ marginLeft: "50px" }}>Most Populor Stores</h3>
          </Col>
          <Col>
            {" "}
            <hr
              style={{
                color: "black",
                marginRight: "-5px",
                width: "90%",
                borderWidth: "2px",
                height: "5px",
              }}
            />
          </Col>
        </Row>
      </Container>

      {populor.length > 0 ?

        <div style={{ padding: "80px 0px 0px 0px" }}>
          <Container>
            <Row>
              <Col style={{ padding: "0px 300px 0px 0px" }}>
                <Card style={{ width: "22rem" }}>
                  <Link to={"/seller/visit/" + populor[0]["fields"].store}>  <Card.Img
                    variant="top"
                    width="500px"
                    height="400px"
                    src={populor[0]["fields"].image}
                  /></Link>
                  <Card.Body>
                    <Card.Title style={{ backgroundColor: "orange", textAlign: "center" }}>

                      {populor[0]["fields"].store_name}
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Description: </span>{populor[0]["fields"].description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: "0px 300px 0px 0px" }}>
                <Card style={{ width: "22rem" }}>
                  <Link to={"/seller/visit/" + populor[1]["fields"].store}>  <Card.Img
                    variant="top"
                    width="500px"
                    height="400px"
                    src={populor[1]["fields"].image}
                  /></Link>
                  <Card.Body>
                    <Card.Title style={{ backgroundColor: "orange", textAlign: "center" }}>

                      {populor[1]["fields"].store_name}
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Description: </span> {populor[1]["fields"].description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: "0px 300px 0px 0px" }}>
                <Card style={{ width: "22rem" }}>
                  <Link to={"/seller/visit/" + populor[2]["fields"].store}> <Card.Img
                    variant="top"
                    width="500px"
                    height="400px"
                    src={populor[2]["fields"].image}
                  /></Link>
                  <Card.Body>
                    <Card.Title style={{ backgroundColor: "orange", textAlign: "center" }}>

                      {populor[2]["fields"].store_name}
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Description: </span>{populor[2]["fields"].description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        : null}


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
