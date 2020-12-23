import React,{useState} from 'react'
import $ from 'jquery';
import { Form, Button, FormControl, ControlLabel,Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import { Control} from 'react-redux-form';



export default function EditSellerProfile(props)  {


function handleSubmit(product) {
  console.log('jjj', product)

}
function ajax(product) {

$.ajax({
method: 'POST',
url:'http://localhost:3000/edit/profile',//fix it later
data : JSON.stringify(product),
contentType: "application/json",

success:function(){
  console.log('success')
},
error: function(err){
  console.log('error:' ,err)
}
})

}

 console.log(props.location.info.title)
return (
  <div>
  <Form.Group model="product"
  onSubmit={(product) => ajax(product)}>

     <Form.Row style={{marginTop:'20px'}}>
  

     <Form.Label column="lg" lg={2} htmlFor="product.product_Name">Name Of Product: </Form.Label>
  <Col>
  <Control.text model="product.product_Name" id="product.product_Name" value= {props.location.info.title} />
  </Col>
  </Form.Row>
  <br/>

  <Form.Row>
  <Form.Label column="lg" lg={2} htmlFor="product.product_description">Description:</Form.Label>
   <Col>
  <Control.text model="product.product_description" id="product.product_description" />
  </Col>
  </Form.Row>
  <br/>
  <Form.Row>
  <Form.Label column="lg" lg={2} htmlFor="product.price">Price:</Form.Label>
  <Col>
  <Control.text model="product.price" id="product.price" />
  </Col>
 </Form.Row>
 <br/>
  {/* <label htmlFor="pro.image">Add Picture:</label>
  <Control.text model="user.image" id="user.image" /> */}
 
 
  <button type="submit" style={{marginLeft:'50px', width:'70px'}}>
    Edit
  </button>
   <Link to='/seller/profile'>
  <button style={{marginLeft:'50px', width:'70px'}}>
    Cancle
  </button>
  </Link>
  
 </Form.Group>
 </div>
);
}


// export default function EditSellerProfile(props) {
//   const [product_Name, setitemName] = useState('');
//   const [product_description, setitemDescription] = useState('');
//   const [product_price, setitemPrice] = useState('');
//   // const [email, setEmail] = useState('');

// const submitValue = (e) => {
//   // const frmdetails = {
//   //     'Item Name' :product_Name,
//   //     'Item Description' : product_description,
//   //     'Item Price' : product_price,
//   //     // 'Email' : email
//   // }
//   // console.log(frmdetails);

//   e.preventDefault();
//   fetch('/edit/item', { 
//       method: 'POST',
//       data: {
//         product_Name: product_Name,
//         product_description: product_description,
//         product_price: product_price
//       }
//     })
    
//     .then(function(response) {
//       return response.json()
//     }).then(function(body) {
//       console.log(body);
//     });
// }

//     console.log(props.location.info.title)
//     return (
//         <div>
//             <Form.Group>
//   <Form.Row>
//     <Form.Label column="lg" lg={2}>
//       Item Name
//     </Form.Label>
//     <Col>
//       <Form.Control size="lg" type="text"  value= {props.location.info.title} onChange={e => setitemName(e.target.value)}/>
//     </Col>
//   </Form.Row>
//   <br />
//   <Form.Row>
//     <Form.Label column="lg" lg={2}>
//      Item Description 
//     </Form.Label>
//     <Col>
//       <Form.Control  size="lg" type="text" placeholder="Item Description" onChange={e => setitemDescription(e.target.value)} />
//     </Col>
//   </Form.Row>
//   <br />
//   <Form.Row>
//     <Form.Label column="lg" lg={2}>
//      Item Price
//     </Form.Label>
//     <Col>
//       <Form.Control size="lg" type="text" placeholder="Item Price" onChange={e => setitemPrice(e.target.value)} />
//     </Col>
//     <button onClick={submitValue}>Submit</button>
//   </Form.Row>
// </Form.Group>
            
//         </div>
//     )
// }
