//import { connect } from 'react-redux';
import $ from "jquery";
import React from "react";
import { Control, Form } from "react-redux-form";
import Navbar from "./layout/Navbar";
import LoginGo from "./social/google/loginGo";
// import GoogleLogin from "./social/google/google";
import app  from './fireConfig'
//  import firebase from 'firebase'
// import {app} from  "./component/order.js"
// var mapStateToProps = (state) => {
//   console.log(state, "staaaaat");
//   return {
//     name: state.catReducer.name,
//   };
// };
console.log(app)

 if( localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' &&   JSON.parse(localStorage.getItem('token'))["id"] === 141){
 var database =  app.database().ref('notification')
 console.log(database)
 var childkey ;
 var value ;
 var exist = false
//  app.database().ref('notification').on("value", function(snapshot) {
  
//    snapshot.forEach(function(childSnapshot) {
//      childSnapshot.forEach(function(child) {
 
//        if(child.key ===JSON.parse(localStorage.getItem('token'))['id']){
//          exist = true ; 
//          console.log("done")
//         childkey = childSnapshot.key ; 
       
//         value =Number( child.val())

//         localStorage.setItem("not",childkey )
//         // localStorage.setItem("val",value )
//           }
          
        
//  });
  
//  })

//  // const data = snapshot.val();

// });

  // app.database().ref('notification').child(childkey+'').on('value',  (snapshot) => {
  // //  if (value > localStorage.getItem("not"))
  // alert("you have " + value + "orders" ) }) 
}
class Login extends React.Component {
  ajax(login) {
    var that = this 
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/login", //fix it later
      data: JSON.stringify(login),
      contentType: "application/json",
      success: function (res) {
        localStorage.setItem("token", JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));
        
        if( localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
          
          var database =  app.database().ref('notification')
          console.log(database)
          var childkey ;
          var value ;
          var exist = false
          app.database().ref('notification').on("value", function(snapshot) {
           
            snapshot.forEach(function(childSnapshot) {
              childSnapshot.forEach(function(child) {
          
                if(Number(child.key) ===JSON.parse(localStorage.getItem('token'))['id']){
                  console.log("iiin")
                  exist = true ; 
                  console.log("done")
                 childkey = childSnapshot.key ; 
                 value =Number( child.val())
                 localStorage.setItem("not2",childkey+"" )
                   }             
          });

          })
          if ( !exist ){
            app.database().ref('notification').push({[JSON.parse(localStorage.getItem('token'))['id']] : 0 })
         }
         });
         
        
        
        }
        // if (tokenObj.type === "buyer") window.location = "/home";
        // //if the user if a seller
        // if (tokenObj.type === "seller")
        //   window.location = `/seller/profile/${tokenObj["id"]}`;

      },
      error: function (err) {
        // window.location.replace('/login')
        console.log("erroddddr:", err.responseJSON.Error);
        alert(err.responseJSON.Error);
        // setTimeout(() => {
        //   alert("Email Or Password Incorrect");
        // }, 300);
        window.location = "/login";
      },
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginLeft: "700px" }}>
          <br></br>
          <br></br>
          <Form
            class="row g-3 needs-validation"
            model="login"
            type="submit"
            onSubmit={(login) => this.ajax(login)}
            novalidate
          >
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                Email address
              </label>
              <b></b>
              <br></br>
              <Control.text
                className="form-control"
                type="email"
                placeholder="Enter email"
                model="login.email"
                id="login.email"
                required
                style={{ padding: "2px 2px 2px 2px" }}
              />
              <div class="valid-feedback">Looks good!</div>
              <b></b>
              <br></br>
              <label for="validationCustom01" className="form-label">
                Password
              </label>
              <Control.text
                className="form-control"
                type="password"
                placeholder="Enter Password"
                model="login.password"
                id="login.password"
                required
                style={{ padding: "7px 2px 2px 2px" }}
              />
              <div class="valid-feedback">Looks good!</div>
              <b></b>
              <br></br>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Log in
                </button>
              </div>
            </div>{" "}
            {/* <GoogleLogin /> */}
            <LoginGo />
          </Form>
        </div>{" "}
      </div>
    );
  }
}
export default Login;
