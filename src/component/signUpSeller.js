import React from 'react';
import { connect } from 'react-redux';
import { Form,Button  } from 'react-bootstrap';
import store from './Store';
import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { storage } from '../firebase/index';
var mapStateToProps = (state) => {
return {
    email : state.reducer.email,
    password :state.reducer.password,
    storeName:state.reducer.storeName,
    category:state.reducer.category,
    description:state.reducer.description,
    location:state.reducer.location,
    deliveryOrder : state.reducer.deliveryOrder,
    image :state.reducer.image
  }
}
var action = {type : 'INPUT_CANGE', text:'' }
var mapDispatchToProps = (dispatch) =>{
    return {
        inputChanged : (event) => {
             action = {type : 'INPUT_CANGE', text:event.target.value, name:event.target.name}
            dispatch(action);
         }
        //  imageChange : (event) =>{
        //   action = {type : 'IMAGE_CHANGE', text: event.target.files[0]}
        //  }
    }
}
function SignUpSeller(props){
    var clickButton =() =>{
        // console.log( props.email)
      var obj = {};
      obj.email = props.email;
      obj.email = props.email;
      obj.password =props.password;
      obj.storeName=props.storeName;
      obj.category=props.category;
      obj.description=props.description;
      obj.location=props.location;
      obj.deliveryOrder = props.deliveryOrder;
      obj.image =props.image
      console.log(obj)
        $.ajax({
            url: "/seller/signup",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json",
            success: function (data) {
                //redirect to login page
              console.log("POST sent successfully!");
             // <Route  path ='/login' exact  component ={Login}></Route>
            },
            error: function (err) {
              console.log(err);
            }
      });   
    }
    var handleUpload =()=>{
      //console.log(event.target.files[0])
      // var image = props.image
       console.log('image', props.image)
      // // event.preventDefault();
      // var uploadTask = storage.ref(`images/${image.name}`).put(image);
      // console.log(image.name)
      // uploadTask.on(
      //   "state_changed",
      //    snapshot => {},
      //    error =>{
      //      console.log(error);
      //    },
      //    ()=>{
      //      storage
      //      .ref("images")
      //      .child(image.name)
      //      .getDownloadURL()
      //      .then(url =>{
      //        console.log(url)
      //      })
      //    }
      // )
    }
    return (
        <div style ={{maxWidth :"500px", margin:'auto', padding:'0px 10px 10px 10px'}}>
<div class="card w-100">
  <div class="card-body">
  <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name ="email" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  name ="password" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}/>
  </Form.Group>
  <Form.Group controlId="formGroupStore Name">
    <Form.Label>Store Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Store Name"  name ="storeName" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} />
  </Form.Group>
   <Form.Group controlId="formGroupDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description"  name ="description" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} />
  </Form.Group>
   <Form.Group controlId="formGroupLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Enter Location" name ="location" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} />
  </Form.Group>
  <Form.Group controlId="exampleForm.SelectCategory"  onChange = {props.inputChanged}>
    <Form.Label>Choose Category</Form.Label>
    <Form.Control as="select" custom name ="category" style ={{padding:"2px 2px 2px 2px"}}>
    <option></option>
      <option value ="Foods">Foods</option>
      <option value ="clothes">clothes</option>
      <option value ="Baby Show Product">Baby Shower Products</option>
      <option value ="Accessories">Accessories</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.SelectDelivery"  name ="deliveryOrder" onChange = {props.inputChanged}>
    <Form.Label>Delivery Order WithIn</Form.Label>
    <Form.Control as="select" custom name ="deliveryOrder" style ={{padding:"2px 2px 2px 2px"}}>
    <option></option>
      <option value ="12 Hours">12 Hours</option>
      <option value ="24 Hours">24 Hours</option>
      <option value ="Day">Day</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formGroupimage">
    <Form.Label>image</Form.Label>
    <Form.Control type="file" placeholder="Enter image" name ="image"  onChange = {handleUpload} style ={{padding:"2px 2px 2px 2px"}} />
  </Form.Group>
  {/* <img  src ={props.image} onChange = {props.inputChanged}/> */}
  <img src={props.image || "http://via.placeholder.com/100x150"}
   alt="firebase-image"/>
  <button onClick={handleUpload}>Upload</button>
</Form>
<button type="button" class="btn btn-danger" onClick ={clickButton} style = {{margin:'0px 180px', width:100}}>Sign Up</button>
  </div>
</div>
     </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);