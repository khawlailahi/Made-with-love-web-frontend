
import React from 'react';
import { connect } from 'react-redux';
import { Form,Button  } from 'react-bootstrap';
import store from './Store';
import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { storage } from '../firebase/index';
import NavbarBuyer from './layout/NavbarBuyer'
//call the state I need from the store
var mapStateToProps = (state) => {
    console.log(state, 'staaaaat')
return {
    email : state.reducerBuyer.email,
    password :state.reducerBuyer.password,
    userName:state.reducerBuyer.userName,
    location:state.reducerBuyer.location,
    phoneNumber:state.reducerBuyer.phoneNumber
    
  }
}

var action = {type : 'INPUT_BUYER', text:'' }
var mapDispatchToProps = (dispatch) =>{
    return {
        
        inputChanged : (event) => {
             action = {type : 'INPUT_BUYER', text:event.target.value, name:event.target.name}
            dispatch(action);
            
         }
    }
}




//make sign up buyer component
function SignUpBuyer (props){
    //console.log(props)
    //make ajax to send values of inputs 
    var clickButton =() =>{
     console.log( props)
      var obj = {};
      obj.email = props.email;
      obj.password = props.password;
      obj.userName = props.userName;
      obj.location = props.location;
      obj.phoneNumber = props.phoneNumber;
  
      console.log(obj)
        $.ajax({
            url: "/buyer/signup",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json",

            success: function (data) {
                //redirect to login page
              console.log("POST sent successfully!");
        
            },
            error: function (err) {
              console.log(err);
            }
      });   
    }
  
    return (

      <div>
        <NavbarBuyer/>
        <div style ={{maxWidth :"500px", margin:'auto', padding:'0px 10px 10px 10px'}}>
   
        <div class="card w-100">
          <div class="card-body">

          <Form action="/action_page.php" class="needs-validation" novalidate>
        <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name ="email" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  required  />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>  

  
  <Form.Group controlId="formGroupPassword">
    <Form.Label>password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" name ="password" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} required  />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>

  <Form.Group controlId="formGroupuserName">
    <Form.Label>userName</Form.Label>
    <Form.Control type="userName" placeholder="Enter userName" name ="userName" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>

   <Form.Group controlId="formGroupLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control type="location" placeholder="Enter location" name ="location" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>  

  <Form.Group controlId="formGroupPhoneNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phoneNumber" placeholder="Enter phone Number" name ="phoneNumber" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>  
  <button type="submit" class="btn btn-danger"  onClick ={clickButton} style = {{margin:'0px 180px', width:"100px"}}>Sign Up</button>
        </Form>  
        </div>
</div>


</div>
     </div>
    )

} 
export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuyer);
