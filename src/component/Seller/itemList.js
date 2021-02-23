import React from "react";
import { Link, NavLink } from "react-router-dom";
import rose from "../images/rose.png";
import { Container, Row, Col, Button, Dropdown, Card } from "react-bootstrap";
import down3 from "../images/down3.jpg";
export default function ItemList(props) {
  console.log(props, "iteeeem props");

  return (
    <div className="row">
      {props.items.map((item, i) => {
        var url = `/seller/visit/${item["fields"].id}`;
        console.log(url);

        return (
          <div key={item["pk"]}>
            <Card
              className="card"
              style={{
                border: "solid  black 2px",
                width: "19rem",
                cursor: "pointer",
                height: "570px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                marginLeft: "200px",
              }}
            >
              <Link
                to={{
                  pathname: "/buyer/item",
                  info: { item: item, cat: props.cat },
                }}
              >
                <Card.Img
                  src={item["fields"].image}
                  style={{ width: "100%", height: "300px", margin: " 0 auto" }}
                />{" "}
              </Link>
              <Card.Body>
                <Card.Title>product: {item["fields"].productname}</Card.Title>
                <Card.Text>Price: {item["fields"].price} $</Card.Text>
                <Card.Text>
                  Description: {item["fields"].description}{" "}
                </Card.Text>

                <NavLink to={"/seller/visit/" + item["fields"].id}>
                  <p className="card-text">Store: {item["fields"].store}</p>
                </NavLink>
                {/* <button onClick={()=>{clicked(item['pk'])}}> 
                Order
                </button> */}
                <br/>
                <Button  style={{
                          backgroundColor: "green",
                          color:"white",
                          borderRadius: "10px",
                          border: "2px solid white",
                          padding: "7px 7px",
                          fontSize:"20px"
                          
                        }}>
                  <Link
                    to={{
                      pathname: "/order",
                      info: {
                        id: item["pk"],
                        name: item["fields"].productname,
                        url: item["fields"].image,
                        store: item["fields"].store,
                        price: item["fields"].price,
                        storeId: item["fields"].id
                      },
                    }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Order
                  </Link>
                </Button><br/>
              </Card.Body>
            </Card>
            <br />
            <br />
          </div>
        );
      })}
      <div
        style={{
          width: "100%",
          marginTop: "150px",
          height: "600px",
          backgroundImage: `url(${down3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#FCFBED" }}>Have a Question?</h3>
              <br />
              <i
                className="far fa-clock fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                {" "}
                Saturday - Thursday: 09:00AM - 18:30PM
              </i>
              <br />
              <br />
              <i
                class="fas fa-map-marker-alt fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                {" "}
                Jordan,Amman
              </i>
              <br />
              <br />
              <i
                class="fas fa-phone-alt fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                {" "}
                +962796720978
              </i>
              <br />
              <br />
              <i
                class="fas fa-envelope fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                <a
                  href="mailto:lovemadewith817@gmail.com"
                  style={{ color: "#FCFBED" }}
                >
                  {" "}
                  Made_With_Love
                </a>
              </i>
            </Col>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#FCFBED" }}>Informations</h3>
              <br />
              <Link to="/about">
                <i
                  class="far fa-sticky-note fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
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
                  style={{ fontSize: "20px", color: "#FCFBED" }}
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
// export default ItemList
