import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useState } from "react";
import $ from "jquery";
import app from './fireConfig';
import NavBar from './layout/Navbar'
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import {storage} from './fireConfig';
var mapStateToProps = (state) => {
  return {
    email: state.reducer.email,
    password: state.reducer.password,
    storeName: state.reducer.storeName,
    category: state.reducer.category,
    description: state.reducer.description,
    location: state.reducer.location,
    delieveryTime: state.reducer.deliveryOrder,
    url: state.reducer.image
  }
}
var action = { type: 'INPUT_CANGE', text: '' }
var mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (event) => {
      action = { type: 'INPUT_CANGE', text: event.target.value, name: event.target.name }
      dispatch(action);
    }
  }
}
 function SignUpSeller(props) {

  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");


  var clickButton = () => {
    // console.log( props.email)
    var obj = {};
    obj.email = props.email;
    obj.password = props.password;
    obj.storeName = props.storeName;
    obj.category = props.category;
    obj.description = props.description;
    obj.location = props.location;
    obj.delieveryTime = props.delieveryTime;
    obj.url = url;
    console.log(obj)
    $.ajax({
      url: "http://127.0.0.1:8000/seller/signup",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",
      success: function (data) {
        //redirect to login page
      console.log("POST sent successfully!");
      window.location =`/login`
     // <Route  path ='/login' exact  component ={Login}></Route>
    },
    error: function (err) {
     alert('email already exsit')
    // window.location = `/seller/signup`      
      }
})  
 }
 var handleUpload =(e)=>{
  if (e.target.files[0]) {
    setImage(e.target.files[0])
}  console.log(image)}
  //console.log(event.target.files[0])
  // event.preventDefault();
  var tr1=()=>{
  var uploadTask = storage.ref(`images/${image.name}`).put(image);
  console.log(image.name)
  uploadTask.on(
    "state_changed",
     snapshot => {},
     error =>{
       console.log(error);
     },
     ()=>{
       storage
       .ref("images")
       .child(image.name)
       .getDownloadURL()
       .then(url =>{
          setUrl(url)
       })
     }
  )
}
var takingTheUrl = ()=>{
if(image !== ""){
  return <div>
    <img src={url}></img>
    <button type="button" onClick={tr1}>Upload</button>
  </div>
}
}
  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: "500px", margin: 'auto', padding: '0px 10px 10px 10px' }}>
        <div className="card w-100">
          {/* <div className="card-body"> */}
          <div className="container">
            <Form className="needs-validation" action="" >
              <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Enter email" name="email" id="email" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <Form.Group >
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name="password" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Store Name</Form.Label>
                <Form.Control placeholder="Enter Store Name" name="storeName" id="storeName" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <Form.Group >
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter Description" name="description" id="Description" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <Form.Group >
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="Enter Location" name="location" id="Location" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <Form.Group onChange={props.inputChanged} required>
                <Form.Label>Choose Category</Form.Label>
                <Form.Control as="select" custom name="category" style={{ padding: "2px 2px 2px 2px" }} required>
                  <option></option>
                  <option value="food">Food</option>
                  <option value="clothes">clothes</option>
                  <option value="babyproduct">Baby Products</option>
                  <option value="accessories">Accessories</option>
                </Form.Control>
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <Form.Group name="deliveryOrder" onChange={props.inputChanged} required>
                <Form.Label>Deliver Order WithIn</Form.Label>
                <Form.Control as="select" custom name="deliveryOrder" style={{ padding: "2px 2px 2px 2px" }} required>
                  <option></option>
                  <option value="12 Hours">12 Hours</option>
                  <option value="24 Hours">24 Hours</option>
                  <option value="Same Day">Same Day</option>
                </Form.Control>
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>
              <input type ="file" name="image" onChange = {handleUpload}/><br></br>
              {takingTheUrl()}
              <button type="button" className="btn btn-danger"  onClick={clickButton}  style={{ margin: '0px 180px', width: 100 }}>Sign Up</button>
              <br /><br />
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);
