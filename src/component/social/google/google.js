// import React, { Component } from "react";
// import $ from "jquery";

// //Assets
// import google from "./google.png";

// import config from "../config";

// class GoogleLogin extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount(props) {
//     (function () {
//       var e = document.createElement("script");
//       e.type = "text/javascript";
//       e.async = true;
//       e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
//       var t = document.getElementsByTagName("script")[0];
//       t.parentNode.insertBefore(e, t);
//     })();
//     console.log(props, "proooops");
//   }

//   // saveData() {

//   // }

//   //Triggering login for google
//   googleLogin = () => {
//     let response = null;
//     window.gapi.auth.signIn({
//       callback: function (authResponse) {
//         this.googleSignInCallback(authResponse);
//       }.bind(this),
//       clientid: config.google, //Google client Id
//       cookiepolicy: "single_host_origin",
//       requestvisibleactions: "http://schema.org/AddAction",
//       scope: "https://www.googleapis.com/auth/plus.login email",
//     });
//   };

//   googleSignInCallback = (e) => {
//     console.log(e);
//     if (e["status"]["signed_in"]) {
//       window.gapi.client.load(
//         "plus",
//         "v1",
//         function () {
//           if (e["access_token"]) {
//             this.getUserGoogleProfile(e["access_token"]);
//           } else if (e["error"]) {
//             console.log("Import error", "Error occured while importing data");
//           }
//         }.bind(this)
//       );
//     } else {
//       console.log("Oops... Error occured while importing data");
//     }
//   };

//   getUserGoogleProfile = (accesstoken) => {
//     var e = window.gapi.client.plus.people.get({
//       userId: "me",
//     });
//     e.execute(
//       function (e) {
//         if (e.error) {
//           console.log(e.message);
//           console.log("Import error - Error occured while importing data");
//           return;
//         } else if (e.id) {
//           //Profile data
//           // alert("Successfull login from google : " + e.displayName);
//           console.log(e, "khkkkkkkkk");
//           var obj = {};
//           obj.email = e.emails[0]["value"];
//           obj.password = "";
//           obj.userName = e.name["givenName"];
//           obj.location = "";
//           obj.phoneNumber = "";

//           console.log(obj);
//           $.ajax({
//             url: "http://127.0.0.1:8000/buyer/signup",
//             method: "POST",
//             data: JSON.stringify(obj),
//             contentType: "application/json",

//             success: function (data) {
//               console.log("POST sent successfully!");
//               localStorage.setItem("token", JSON.stringify(res));
//               console.log(JSON.parse(localStorage.getItem("token")));
//               // var tokenObj = JSON.parse(localStorage.getItem("token"));
//               // if (tokenObj.type === "buyer") window.location = "/home";
//               // // if the user if a seller
//               // if (tokenObj.type === "seller")
//               //   window.location = `/seller/profile/${tokenObj["id"]}`;
//             },
//             error: function (err) {
//               console.log(err);
//               // alert("email already exist");
//             },
//           });

//           return;
//         }
//       }.bind(this)
//     );
//   };

//   render() {
//     return (
//       <img
//         src={google}
//         title="google login"
//         alt="google"
//         onClick={() => this.googleLogin()}
//       />
//     );
//   }
// }

// export default GoogleLogin;
