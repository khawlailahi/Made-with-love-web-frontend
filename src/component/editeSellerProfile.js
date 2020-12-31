
// import $ from 'jquery';
// import { Form, Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
// import { Control} from 'react-redux-form';
// import React, { Component } from 'react'

// // export default class editeSellerProfile extends Component {
// //   render() {
// //     return (
// //       <div>
        
// //       </div>
// //     )
// //   }
// // }

// export default class editeSellerProfile extends Component {
//   constructor(props){
//     super(props);
//   }
// // componentDidMount(){
// //   $.ajax({
// //     url:`http://127.0.0.1:8000/itemtoedit/${this.props.location.id}`,
// //     type:'GET',
// //     success:function(data){
// //       console.log(data, 'Fetch the data')
// //       var data1 = JSON.parse(data)
// //      //  window.location =`/seller/profile/${JSON.parse(localStorage.getItem('token')['id'])}`
// //      // var data1 = data
// //       that.setState({data:data1},()=>{console.log("22222222222222",that.state)})
// //       // that.setState(data
// //       // console.log(that.state,'staaate')
// //     },
// //     error : function(error){
// //       console.log(error, 'error in fetch the data')
// //     }
// //   })

// // }
// ajax(product) {
//   console.log(product)
// $.ajax({
// method: 'PUT',
// // url:`http://127.0.0.1:8000/edit/profile${this.props.location}`,//fix it later
//  url:`http://127.0.0.1:8000/edit/profile`,
// data : JSON.stringify(product),
// contentType: "application/json",
// success:function(){
//   console.log('success')
// },
// error: function(err){
//   console.log('error:' ,err)
// }
// })
// }
// //  console.log(props.location.info.title)
// render() {
//       return(
//       <div>
//           {/* <NavbarSeller/> */}
//         <Form
//         model="user"
//         onSubmit={(user) => this.ajax(user)}
//       >
     
    
//       <div className="col-md-4">
//         <label htmlFor="user.product"  className="form-label" >Name Of Product:</label>
//         <Control.text model="user.product" id="user.product" className="form-control" required/>
//         </div>
//         <div className="col-md-3">
//          <label htmlFor="user.description" className="form-label">Description:</label>
//         <Control.text model="user.description" id="user.description" className="form-control" required />
//         </div>
//         <div className="col-md-3">
//         <label htmlFor="user.price" className="form-label">Price:</label>
//         <Control.text model="user.price" id="user.price" className="form-control" required/>
//         </div>
    
//         <div className="col-12">
//       <button className="btn btn-primary" type="submit">Submit</button>
//     </div>
//       </Form></div>


// )
// }
// // export default function EditSellerProfile(props) {
// //   const [product_Name, setitemName] = useState('');
// //   const [product_description, setitemDescription] = useState('');
// //   const [product_price, setitemPrice] = useState('');
// //   // const [email, setEmail] = useState('');
// // const submitValue = (e) => {
// //   // const frmdetails = {
// //   //     'Item Name' :product_Name,
// //   //     'Item Description' : product_description,
// //   //     'Item Price' : product_price,
// //   //     // 'Email' : email
// //   // }
// //   // console.log(frmdetails);
// //   e.preventDefault();
// //   fetch('/edit/item', { 
// //       method: 'POST',
// //       data: {
// //         product_Name: product_Name,
// //         product_description: product_description,
// //         product_price: product_price
// //       }
// //     })
// //     .then(function(response) {
// //       return response.json()
// //     }).then(function(body) {
// //       console.log(body);
// //     });
// // }
// //     console.log(props.location.info.title)
// //     return (
// //         <div>
// //             <Form.Group>
// //   <Form.Row>
// //     <Form.Label column="lg" lg={2}>
// //       Item Name
// //     </Form.Label>
// //     <Col>
// //       <Form.Control size="lg" type="text"  value= {props.location.info.title} onChange={e => setitemName(e.target.value)}/>
// //     </Col>
// //   </Form.Row>
// //   <br />
// //   <Form.Row>
// //     <Form.Label column="lg" lg={2}>
// //      Item Description 
// //     </Form.Label>
// //     <Col>
// //       <Form.Control  size="lg" type="text" placeholder="Item Description" onChange={e => setitemDescription(e.target.value)} />
// //     </Col>
// //   </Form.Row>
// //   <br />
// //   <Form.Row>
// //     <Form.Label column="lg" lg={2}>
// //      Item Price
// //     </Form.Label>
// //     <Col>
// //       <Form.Control size="lg" type="text" placeholder="Item Price" onChange={e => setitemPrice(e.target.value)} />
// //     </Col>
// //     <button onClick={submitValue}>Submit</button>
// //   </Form.Row>
// // </Form.Group>
// //         </div>
// //     )
// }