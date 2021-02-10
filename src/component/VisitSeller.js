import React from "react";
import $ from "jquery";
import { Container, CardGroup, Card, Row, Col } from "react-bootstrap";
import VisitItems from "./VisitItem";
import NavbarSeller from "./layout/NavbarSeller";
import { useParams } from "react-router-dom";
import Rate from "./rate";
import {

  Button,
  NavDropdown,
} from "react-bootstrap";
import logo11 from "../images/logo11.png";
import heart from "../images/heart.jpg";
import back3 from "../images/back3.jpg";
import { Link } from "react-router-dom";
const styles = {
  card: {
    borderRadius: 55,
    padding: "4rem",
    marginLeft: "-100px",
    width: "1600px",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 55,
  },
};
class VisitSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], items: [] };
  }
  fetchData = (id) => {
    var that = this;
    console.log(typeof this.props.location.pathname.slice(15), "iddddd");
    // console.log(1111111111111111)
    // var  { id } = useParams();
    console.log(this.props.location.pathname.slice(14), "idddddd");
    $.ajax({
      url: `http://127.0.0.1:8000/seller/visit/${this.props.location.pathname.slice(
        14
      )}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        var data1 = JSON.parse(data);
        that.setState({ data: data1 }, () => {
          console.log("22222222222222", that.state);
        });
      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  fetchItems = (id) => {
    var that = this;
    console.log(id, "fetchitems");
    console.log(1111111111111111);
    $.ajax({
      url: `http://127.0.0.1:8000/seller/visit/items/${this.props.location.pathname.slice(
        14
      )}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        //  var data1 = JSON.parse(data)
        // var data1 = data
        that.setState({ items: data }, () => {
          console.log("itemsss", that.state);
        });
        // that.setState(data
        // console.log(that.state,'staaate')
      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  componentDidMount = () => {

    console.log(this.props.location, "iddddd");
    this.fetchData();
    this.fetchItems();
  };
  upState = (data) => {
    this.setState({
      store_name: data["fields"],
    });
  };
  render() {

    var tokenObj = JSON.parse(localStorage.getItem("token"));
    if (!tokenObj) { window.location = "/404" }
    console.log(this.state, "staaaaaaaate");
    if (this.state.data[0])
      var x = (
        <div>
          {" "}
          <Container fluid style={{ marginTop: "-580px" }}>
            <CardGroup className="m-5 d-block">
              <Card className=" shadow" style={styles.card}>
                <Row>
                  <Col>
                    <Card.Img
                      src={this.state.data[0]["fields"].image}
                      style={styles.cardImage}
                      style={{ height: "400px", width: "550px" }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text
                        as="h2"
                        style={{
                          fontSize: "28px",
                          fontFamily: "Yanone Kaffeesatz",
                          color: "#A3A1A0",
                        }}
                      >

                        <pre
                          style={{
                            fontFamily: "Yanone Kaffeesatz",
                            color: "#787371",
                            fontWeight: "bold",
                            fontSize: "29px"
                          }}
                        >
                          {" "}
                            Store Name:{" "}
                          <span
                            style={{
                              // fontSize: "30px",
                              fontFamily: "Yanone Kaffeesatz",
                              fontWeight: "normal",
                              fontSize: "28px"
                            }}
                          >   {this.state.data[0]["fields"].store_name}</span>
                        </pre> <Rate ttt={this.state.data[0].pk} />

                      </Card.Text>
                      <br />
                      <Card.Text
                        as="h2"
                        style={{
                          fontSize: "28px",
                          fontFamily: "Yanone Kaffeesatz",
                          color: "#787371",
                        }}
                      >

                        <pre
                          style={{
                            fontFamily: "Yanone Kaffeesatz",
                            color: "#787371",
                            fontWeight: "bold",
                            fontSize: "29px"
                          }}
                        >
                          Description:{" "}
                          <span
                            style={{
                              fontFamily: "Yanone Kaffeesatz",
                              fontWeight: "normal",
                              fontSize: "28px"
                            }}
                          >   {this.state.data[0]["fields"].description}  </span>
                        </pre>

                      </Card.Text>
                      <br />
                      <Card.Text
                        as="h2"
                        style={{
                          fontSize: "28px",
                          fontFamily: "Yanone Kaffeesatz",
                          color: "#544F4E",
                        }}
                      >

                        <pre
                          style={{
                            fontFamily: "Yanone Kaffeesatz",
                            color: "#787371",
                            fontWeight: "bold",
                            fontSize: "29px"
                          }}
                        >
                          Location :
                         <span style={{
                            fontFamily: "Yanone Kaffeesatz",
                            fontWeight: "normal",
                            fontSize: "28px"
                          }}
                          >   {this.state.data[0]["fields"].location}</span>
                        </pre>

                      </Card.Text>
                      <br />
                      <Card.Text
                        as="h4"
                        style={{
                          fontSize: "28px",
                          fontFamily: "Yanone Kaffeesatz",
                          color: "#544F4E",
                        }}
                      >
                        <pre
                          style={{
                            fontFamily: "Yanone Kaffeesatz",
                            color: "#787371",
                            fontWeight: "bold",
                            fontSize: "29px"
                          }}
                        >
                          Delievery Time :{" "}
                          <span style={{
                            fontFamily: "Yanone Kaffeesatz",
                            fontWeight: "normal",
                            fontSize: "28px"
                          }}
                          >    {this.state.data[0]["fields"].delivery_time}</span>
                        </pre>
                      </Card.Text>
                      <br />
                      {this.state.data[0]["fields"].email ?
                        <Card.Text
                          as="h2"
                          style={{
                            fontSize: "28px",
                            fontFamily: "Yanone Kaffeesatz",
                            color: "#544F4E",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Yanone Kaffeesatz",
                              fontWeight: "normal",
                              fontSize: "28px"
                            }}
                          >
                            <pre
                              style={{
                                fontFamily: "Yanone Kaffeesatz",
                                color: "#787371",
                                fontWeight: "bold",
                                fontSize: "29px"
                              }}
                            >

                              <a
                                href={'mailto:' + this.state.data[0]["fields"].email}
                                style={{ color: "#787371" }}
                              >
                                <button
                                  type="submit"
                                  style={{
                                    color: "white",
                                    backgroundColor: "green",
                                    marginLeft: "20px",
                                    borderRadius: "10px",
                                    border: "2px solid white",
                                    fontSize: "20px",
                                    padding: "6px 15px",
                                    fontFamily: "Yanone Kaffeesatz",
                                    marginTop: "40"
                                  }}>Email</button>
                              </a>
                            </pre>
                          </span>
                        </Card.Text> : null}


                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Container>
          <VisitItems
            items={this.state.items}
            cat={this.state.data[0]["fields"].category}
          />
        </div>
      );
    return (
      <div>
        <NavbarSeller />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        {x}
      </div>
    );
  }
}
export default VisitSeller;
