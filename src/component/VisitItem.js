import React from "react";

import {Card, Row , Col} from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import axios from 'axios';

  
  


const VisitItems = (props) => {

   

  console.log((props))
  return(
    <div>
   {/* <h1>{item['pk']}</h1> */}
  
   <Row>
        {
           
         props.items.map((item )=>{
           return (
              <Col>
       
           <Card style={{ width: "400px", marginTop: "50px", marginLeft:'50px' }}>
                   <Card.Img
                     variant="top"
                     src={item['fields']['image']}
                   />
                  <Card.Body>
                     <Card.Title style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Name :</label> {item['fields']['productname']}</Card.Title>
                     <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Description :</label> {item['fields']['description']}</Card.Text>
                     <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Price :</label> {item['fields']['price']}</Card.Text>
                   </Card.Body>
                 </Card>
                 </Col> 

         )})
         
        }
        </Row>
        
     
 </div> 
 )  
}

export default VisitItems;