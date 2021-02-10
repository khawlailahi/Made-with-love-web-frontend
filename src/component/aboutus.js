import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import about10 from "../images/about10.jpg";
import down from "../images/down.jpg";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../images/logo1.png";
const About = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundImage: `url(${about10})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="justify-content-md-center">
            {/* <Col xs lg="3">
      1 of 3
    </Col> */}
            <div
              style={{
                float: "none",
                marginLeft: "900px",
                marginRight: "500px",

                marginTop: "0",
                paddingTop: "10px",
              }}
            >
              <a href="/">
                <img src={logo1} width="200" height="180" />
              </a>
            </div>
            {/* <Col md="auto">
              <hr style={{ color: "white", height: "50px" }} />
            </Col> */}
            <hr
              style={{
                border: "0",
                borderTop: "1px solid rgb(0, 0, 0, 0)",
              }}
            />
          </Row>
          <hr style={{ marginLeft: "400px", border: "0.5px solid white" }}></hr>
          <Row style={{ marginLeft: "50px" }}>
            <Col style={{ padding: "0px 20px 0px 500px" }}>
              <a
                href="/"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Home
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}>
              <a
                href="/about"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                About Us
              </a>
            </Col>
            <Col>
              <a
                href="/login"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Login
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br> <br></br>
      <div>
      <h1 style={{ textAlign:"center", fontSize:"70px", fontWeight:"bold", backgroundColor:"salmon", color:"white"}}>Our Story</h1>
        <Row style={{ marginTop: "150px", marginLeft: "20px" }}>
          <Col className="col-6">
               <Carousel>
                <Carousel.Item interval={500} >
                  <img
                    style={{
                      border: "solid  white 3px",
                      borderRadius: "10px",
                    }}
                    className="d-block w-100"
                    src="https://thepotterywheel.com/wp-content/uploads/2020/07/how-to-make-marbled-pottery-4.jpg"
                    width="700px"
              height="550px"
                    alt="First slide"
                  />
                  
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    style={{
                      border: "solid  white 3px",
                      borderRadius: "10px",
                    }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    width="700px"
              height="550px"
                    alt="Third slide"
                  />
                  
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    style={{
                      border: "solid  white 3px",
                      borderRadius: "10px",
                    }}
                    className="d-block w-100"
                    src="https://i.pinimg.com/736x/e1/3b/bc/e13bbc9c56b2012c8fe25340506654ef.jpg"
                    width="700px"
              height="550px"
                    alt="Third slide"
                  />
                  
                </Carousel.Item>
              </Carousel>
          </Col>
          <Col className="col-6" style={{ marginTop: "10px"}}>
            
            <br />
            <p style={{ fontSize: "28px", fontFamily: "Yanone Kaffeesatz",color:"#4f4f4f",  border: "solid  white 3px",
                borderRadius: "10px", marginTop:"100px" , fontWeight:"bold"}}>
             <span style={{ fontSize: "55px", color:"salmon"}}> ~ We support homemade businesses ~ </span> <br/>
              by providing them with a space
              (online store ) to showcase and 
              sell their unique products , <br /><br/>introducing them to a larger market
              and offering them the chance to grow <br />
              and develop their businesses in a competitive and inspiring
              environment 
            </p>
          </Col>
        </Row>
      </div>

      <div>
        <Row style={{ marginTop: "150px", marginLeft: "20px" }}>
          
          <Col className="col-6" style={{ marginTop: "10px" }}>
        
            <br />
            <p style={{ fontSize: "28px", fontFamily: "Yanone Kaffeesatz",color:"#4f4f4f",  border: "solid  white 3px",
                borderRadius: "10px", marginTop:"100px" , fontWeight:"bold"}}>
            <span style={{ fontSize: "55px", color:"salmon"}}> ~ Our Website ~ </span> <br/> provides the
              consumers of homemade products with a easy to access and
              all-including market where
              <br /> they can find all the homemade product they may need in one
              place , one app , with an
              <br /> easy to order system .
            </p>
          </Col>
          <Col className="col-6">
          <Carousel
                
                
                >
                  <Carousel.Item interval={500} >
                    <img
                      style={{
                        border: "solid  white 3px",
                        borderRadius: "10px",
                      }}
                      className="d-block w-100"
                      src="https://themakeitcollective.com.au/wp-content/uploads/2020/10/lauren-roberts-439980-unsplash-1800x1200-1.jpg"
                      width="700px"
                height="550px"
                      alt="First slide"
                    />
                    
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      style={{
                        border: "solid  white 3px",
                        borderRadius: "10px",
                      }}
                      className="d-block w-100"
                      src="https://www.justtrendygirls.com/wp-content/uploads/2018/02/layering-necklaces.jpg"
                      width="700px"
                height="550px"
                      alt="Third slide"
                    />
                    
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      style={{
                        border: "solid  white 3px",
                        borderRadius: "10px",
                      }}
                      className="d-block w-100"
                      src="https://i.pinimg.com/originals/94/ab/9c/94ab9cb724bf0e012fd5a5d00f5f8a2d.jpg"
                      width="700px"
                height="550px"
                      alt="Third slide"
                    />
                    
                  </Carousel.Item>
                </Carousel>
          </Col>
        </Row>
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
};
export default About;
