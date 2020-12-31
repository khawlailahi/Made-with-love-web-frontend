import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
// import store from './Store';
// import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter as Router,  Link } from 'react-router-dom';
// import { storage } from '../firebase/index';
import NavBar from './layout/Navbar'
//call the state I need from the store
var mapStateToProps = (state) => {
  console.log(state, 'staaaaat')
  return {
    email: state.reducerBuyer.email,
    password: state.reducerBuyer.password,
    userName: state.reducerBuyer.userName,
    location: state.reducerBuyer.location,
    phoneNumber: state.reducerBuyer.phoneNumber

  }
}

var action = { type: 'INPUT_BUYER', text: '' }
var mapDispatchToProps = (dispatch) => {
  return {

    inputChanged: (event) => {
      action = { type: 'INPUT_BUYER', text: event.target.value, name: event.target.name }
      dispatch(action);

    }
  }
}




//make sign up buyer component
function SignUpBuyer(props) {
  //console.log(props)
  //make ajax to send values of inputs 
  var clickButton = () => {
    console.log(props)
    var obj = {};
    obj.email = props.email;
    obj.password = props.password;
    obj.userName = props.userName;
    obj.location = props.location;
    obj.phoneNumber = props.phoneNumber;

    console.log(obj)
    $.ajax({
      url: "http://127.0.0.1:8000/buyer/signup",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",

      success: function (data) {
        //redirect to login page
        console.log("POST sent successfully!");
        window.location =`/login`

      },
      error: function (err) {
        console.log(err);
        alert("email already exist")
        // window.location='/login'
      
      }
    });
  }

  return (
<div>
      <NavBar />
      <div style={{ maxWidth: "500px", margin: 'auto', padding: '0px 10px 10px 10px' }}>

        <div className="card w-100">
          <div className="card-body">

            <Form action="/action_page.php" className="needs-Validation" novalidate>
              <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>


              <Form.Group >
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name="password" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>

              <Form.Group >
                <Form.Label>userName</Form.Label>
                <Form.Control type="userName" placeholder="Enter userName" name="userName" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>

              <Form.Group >
                <Form.Label>Location</Form.Label>
                <Form.Control type="location" placeholder="Enter location" name="location" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>

              <Form.Group >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phoneNumber" placeholder="Enter phone Number" name="phoneNumber" onChange={props.inputChanged} style={{ padding: "2px 2px 2px 2px" }} required />
                <div className='valid-feedback'></div>
                <div className="invalid-feedback">Please Fill Out This Field</div>
              </Form.Group>

              <button type="button" className="btn btn-danger" onClick={clickButton} style={{ margin: '0px 150px 0px 150px', width: "100px" }}>Sign Up</button>
              <br /><br />
              <div>
                <Link to='/login'><a style={{ margin: '0px 90px 0px 90px' }} >Already have an acount ? Login</a></Link>
              </div>
            </Form>

          </div>

        </div>
      </div>
    </div>
  )

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuyer);
