import React from 'react';
import { connect } from 'react-redux';
import { Form,Button  } from 'react-bootstrap';
<<<<<<< HEAD
// import store from './Store'
//helper functions to call the state you need  from the  store 
var mapStateToProps = (state) => {
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
//dispatch method
var mapDispatchToProps = (dispatch) =>{
    return {
        inputChanged : (event, state) => {
            // console.log('changed', event.target.value);
             action = {type : 'INPUT_CANGE',
              text:event.target.value }
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
        // var action = {type : 'INPUT_CANGE' }
        // dispatch(action);
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
=======
import store from './Store';
import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
var mapStateToProps = (state) => {
    console.log(state, 'staaaaat')
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
      obj.image = props.image;
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
    <Form.Control type="file" placeholder="Enter image" name ="image" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}} />
  </Form.Group>
  {/* <button onClick={}>Upload</button> */}

</Form>
<button type="button" class="btn btn-danger" onClick ={clickButton} style = {{margin:'0px 180px', width:100}}>Sign Up</button>
  </div>
</div>



     </div>
    )
}


>>>>>>> 8763a6f0c7dcc9a0cbba83ccac93cc2a699b5f08
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);