import React from 'react';
import { connect } from 'react-redux';
import { Form,Button  } from 'react-bootstrap';
import store from './Store'
function SignUpBuyer(props){
    return (
        <div>
            <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange = {props.inputChanged} />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange = {props.inputChanged} />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Store Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Store Name" onChange = {props.inputChanged} />
  </Form.Group>
  
   <Form.Group controlId="formGroupEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange = {props.inputChanged} />
  </Form.Group>

   <Form.Group controlId="formGroupEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Enter Location" onChange = {props.inputChanged} />
  </Form.Group>

  <Form>
  <Form.Group controlId="exampleForm.SelectCustom"  onChange = {props.inputChanged}>
    <Form.Label>Choose Category</Form.Label>
    <Form.Control as="select" custom>
        
    <option></option>
      <option>Foods</option>
      <option>clothes</option>
      <option>Baby Show Product</option>
      <option>Accessories</option>
    </Form.Control>
  </Form.Group>
</Form>

<Form>
  <Form.Group controlId="exampleForm.SelectCustom"  onChange = {props.inputChanged}>
    <Form.Label>Delivery Order WithIn</Form.Label>
    <Form.Control as="select" custom>
        
    <option></option>
      <option>12 Hours</option>
      <option>24 Hours</option>
      <option>Day</option>
     
    </Form.Control>
  </Form.Group>
</Form>
</Form>
<button onClick ={props.clickButton}>Add</button>

     </div>
    )
}

var mapStateToProps = (state) => {
    console.log(state)
return {
    email : state.email,
    password :state.password,
    storeName:state.storeName,
    category:state.category,
    description:state.description,
    location:state.location,
    deliveryOrder : state.deliveryOrder
    
  }
}

var action = {type : 'INPUT_CANGE', text:'' }

var mapDispatchToProps = (dispatch) =>{
    return {
        
        inputChanged : (event, state) => {
            
            // console.log('changed', event.target.value);
             action = {type : 'INPUT_CANGE', text:event.target.value }
            dispatch(action);
            
         },
        clickButton : () => {
            console.log(action.text,2222222222222222222)
            // var action = {type : 'INPUT_CANGE' }
            // dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuyer);