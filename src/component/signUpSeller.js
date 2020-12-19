import React from 'react';
import { connect } from 'react-redux';
import { Form,Button  } from 'react-bootstrap';
// import store from './Store'
//helper functions to call the state you need  from the  store 
var mapStateToProps = (state) => {
    console.log('stateeee', state)
return {
    email : state.signUp.email,
    password :state.signUp.password,
    storeName:state.signUp.storeName,
    category:state.signUp.category,
    description:state.signUp.description,
    location:state.signUp.location,
    deliveryOrder : state.signUp.deliveryOrder
  }
}
var action = {type : 'INPUT_CANGE', text:'' }
//dispatch method
var mapDispatchToProps = (dispatch) =>{
    return {
        inputChanged : (event, state) => {
            // console.log('changed', event.target.value);
             action = {type : 'INPUT_CANGE', text:event.target.value }
            dispatch(action);
         },
        // clickButton : () => {
        //     console.log(action.text,2222222222222222222)
        //     // var action = {type : 'INPUT_CANGE' }
        //     // dispatch(action);
        // }
    }
}
//functional component for signup seller
function SignUpSeller(props){
    console.log(props)
    var clickButton = () => {
        console.log("satate from button",{
            email : props.email,
            password :props.password,
            storeName:props.storeName,
            category:props.category,
            description:props.description,
            location:props.location,
            deliveryOrder : props.deliveryOrder
          })  
    }
     return (
        <div>
            <Form>
  <Form.Group controlId="formGroupEmail 1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange = {props.inputChanged} />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange = {props.inputChanged} />
  </Form.Group>
  <Form.Group controlId="formGroupEmail 2">
    <Form.Label>Store Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Store Name" onChange = {props.inputChanged} />
  </Form.Group>
   <Form.Group controlId="formGroupEmail 3">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange = {props.inputChanged} />
  </Form.Group>
   <Form.Group controlId="formGroupEmail 4">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Enter Location" onChange = {props.inputChanged} />
  </Form.Group>
  <Form.Group controlId="exampleForm. 1"  onChange = {props.inputChanged}>
    <Form.Label>Choose Category</Form.Label>
    <Form.Control as="select" custom>
    <option></option>
      <option>Foods</option>
      <option>clothes</option>
      <option>Baby Show Product</option>
      <option>Accessories</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.SelectCustom 2"  onChange = {props.inputChanged}>
    <Form.Label>Delivery Order WithIn</Form.Label>
    <Form.Control as="select" custom>
    <option></option>
      <option>12 Hours</option>
      <option>24 Hours</option>
      <option>Day</option>
    </Form.Control>
  </Form.Group>
</Form>
<button onClick ={()=>{clickButton()}}>Add</button>
     </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);