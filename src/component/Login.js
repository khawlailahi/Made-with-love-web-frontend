// import { connect } from 'react-redux';
// import $ from 'jquery';
// import React from 'react';
// import { Control, Form, actions } from 'react-redux-form';


// class Login extends React.Component {
//     ajax(login){
//         $.ajax({
//             method: 'POST',
//             url:'http://localhost:3000/login',//fix it later
//             data : JSON.stringify(login),
//             contentType: "application/json",
//             success:function(){
//               console.log('success')
//             },
//             error: function(err){
//               console.log('error:' ,err)
//             }
//           })
//         }    
//     render() {
//         return (
//           <Form
//             model="login"
//             onSubmit={(login) => this.ajax(login)}
//           >
//             <label htmlFor="login.email">Email:</label>
//             <Control.text model="login.email" id="login.email" />
//              <label htmlFor="login.password">Password:</label>
//             <Control.text model="login.password" id="login.password" />
           
      
//             <button type="submit">
//               Finish registration!
//             </button>
//           </Form>
//         );
//       }
// }
// export default Login;