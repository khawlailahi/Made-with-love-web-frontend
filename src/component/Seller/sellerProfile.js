import React from "react";
// import ReactDOM from "react-dom";
import $ from "jquery";
import {
  Container,
  CardGroup,
  Card,
  Row,
  Col,
  Button,
  NavDropdown,
} from "react-bootstrap";
import logo11 from "../images/logo11.png";
import heart from "../images/heart.jpg";
import back3 from "../images/back3.jpg";
import { Link } from "react-router-dom";
import down from "../images/down.jpg";
import ListItems from "../listItems";
import NavbarSeller from "../layout/NavbarSeller"
var signout = () => {
  localStorage.removeItem("token");
};
if (JSON.parse(localStorage.getItem("token"))) {
  var id = JSON.parse(localStorage.getItem("token"))["id"];
  var url = `/seller/profile/${id}`;
}
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
const Items = (props) => (
  <Card>
    <td>{props.Item.product_Name}</td>
    <td>{props.Item.price}</td>
    <td>{props.Item.description}</td>
    <td>
      <Button variant="success" color="#ffffff">
        <Link to={"/seller/editProfile" + props.Item.item_id}>edit</Link>
      </Button>
    </td>
    <td>
      <Button variant="danger" color="#ffffff">
        {" "}
        <a
          href="#"
          onClick={() => {
            props.deleteItem(props.Item.item_id);
          }}
        >
          delete
        </a>
      </Button>
    </td>
  </Card>
);
class SellerProfile extends React.Component {
  constructor(props) {
    super(props);
    //  this.state={
    //    store_name: '',
    //    image:'',
    //    title:'',
    //    location:'',
    //    delivery_time:'',
    //    items:[]
    //  }
    this.state = { data: [], items: [] };
  }
  fetchData = (id) => {
    var that = this;
    console.log(id);
    console.log(1111111111111111);
    // console.log(this.props.id,'iiiidddd')
    $.ajax({
      url: ` http://127.0.0.1:8000/seller/profile/${this.props.match.params.id}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        var data1 = JSON.parse(data);
        //  window.location =`/seller/profile/${JSON.parse(localStorage.getItem('token')['id'])}`
        // var data1 = data
        that.setState({ data: data1 }, () => {
          console.log("22222222222222", that.state);
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
  fetchItems = (id) => {
    var that = this;
    console.log(id);
    console.log(1111111111111111);
    $.ajax({
      url: `http://127.0.0.1:8000/seller/profile/items/${this.props.match.params.id}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        that.setState({ items: data }, () => {
          console.log("itemsss", that.state);
        });

      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  componentDidMount = () => {
    this.fetchData();
    this.fetchItems();
  };
  upState = (data) => {
    this.setState({
      store_name: data["fields"],
    });
  };
  render() {
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
                        </pre>

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
                          Email : <span
                            style={{
                              fontFamily: "Yanone Kaffeesatz",
                              fontWeight: "normal",
                              fontSize: "28px"
                            }}
                          > {this.state.data[0]["fields"].email} </span>
                        </pre>

                      </Card.Text>
                      <Link
                        to={{
                          pathname: "/seller/addItem",
                          info: {
                            id: this.state.data[0]["fields"]["category"],
                          },
                        }}
                      >
                        <Button
                          style={{
                            borderRadius: "10px",
                            border: "2px solid white",
                            fontSize: "18px",
                            padding: "12px 25px",
                            fontFamily: "Yanone Kaffeesatz",
                            margin: "50px 0px 0px 400px",
                            backgroundColor: "#EDB55C",
                          }}
                        >
                          Add Item
                        </Button>
                      </Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Container>
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
                <h2 style={{ marginLeft: "50px" }}>Your Products</h2>
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
          <ListItems
            items={this.state.items}
            cat={this.state.data[0]["fields"].category}
          />
        </div>
      );
    return (
      <div>
        <NavbarSeller />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        {x}
      </div>
    );
  }
}
export default SellerProfile;