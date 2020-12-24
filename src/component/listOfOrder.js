
import React, { useState ,useEffect,  Component} from "react";
import ReactDOM from 'react-dom';   

import $ from "jquery";
// import { Form,Button  } from 'react-bootstrap';
import { Button,Card, Container, CardGroup, Row , Col} from 'react-bootstrap';
import NavbarSeller from './layout/NavbarSeller'


export default class listOfOrder extends Component {
  constructor(props){
    super(props)
    this.state={data:[]}
  }
  componentDidMount(){
  
    var that = this;
    $.ajax({
        type: 'GET',
         url:'http://127.0.0.1:8000/seller/order/list/1',
        // headers: {"Authorization": localStorage.getItem('token')},
       
        // headers: { 'x-my-custom-header': 'some value' },
        success: function(data) {
         console.log("data fom get request",data);

         that.setState({
             data:data
         },()=>{console.log(that.state.data,"staaaaaaaaaaate")})
         
        },
        error: function(err) {
          console.log('error:' ,err)
        }
    })
    
}
  render() {
    if(this.state.data.length>0)
console.log(this.state.data.length,"dataa")
var c = <Row>
{this.state.data.map((item )=>{
  return (<div>
     <Col>
  <Card style={{ width: "800px", marginTop: "50px", marginLeft:'90px' }}>
          <Card.Body>
            <Card.Title style={{fontWeight:'normal',}}><label style={{backgroundColor:'maroon',color:"white", fontWeight:'bold', textAlign:'center'}}> {item['fields']['item']}</label> </Card.Title>
            <Card.Text> <label style={{color:'red', fontWeight:'bold'}}>Quantity : </label> {item['fields']['quantity']}</Card.Text>
            <Card.Text> <label style={{color:'red', fontWeight:'bold'}}>Order Date : </label> {item['fields']['order_date']}</Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Location : </label> {item['fields']['location']}</Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Buyer : </label> {item['fields']['buyer']}</Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Phone Number : </label> {item['fields']['phonenumber']}</Card.Text>
            </Card.Body>
                 </Card>
                 </Col> <br/></div>
         )})
        }
        </Row>
    return (
      <div>
      < NavbarSeller />
      <div style={{maxWidth:"1000px", margin:"0 auto", backgroundColor:"lavenderblush"}} >
  <h1 style={{backgroundColor:'maroon',color:"white", fontWeight:'bold', textAlign:'center'}}>List Of Orders</h1>
 <div style={{maxWidth:"1000px", margin:"0 auto", backgroundColor:"lavenderblush"}} >
 {c}
 <br/><br/><br/>
        </div>
      </div></div>
    )
  }
}



