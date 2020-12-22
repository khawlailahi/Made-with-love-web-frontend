// import { connect } from 'react-redux';
// import $, { data } from 'jquery';
// import React from 'react';
// import { Control, Form, actions } from 'react-redux-form';

// class ItemForm extends React.Component {

//   //  fetchUsers = () => {
//       // axios.get('https://jsonplaceholder.typicode.com/users')
//       //   .then(response => {
//       //     // response.data is the users
//       //     const users = response.id
//       //     console.log(users)
//       //   })}
  
 
//   handleSubmit(user) {
//       console.log('jjj', user)

// }

// fetch(){
// $.ajax({
//     method: 'GET',
//     url:'https://jsonplaceholder.typicode.com/users',//fix it later
//     contentType: "application/json",
//     success:function(data){
//       console.log(data[0].id)
//     },
//     error: function(err){
//       console.log('error:' ,err)
//     }
//   })}
// ajax(user){
  
//   $.ajax({
//     method: 'POST',
//     url:'http://localhost:3000/addItem',//fix it later
//     data : JSON.stringify(user),
//     contentType: "application/json",
//     success:function(){
//       console.log('success')
//     },
//     error: function(err){
//       console.log('error:' ,err)
//     }
//   })
// }
// componentDidMount() {
//   this.fetch()
// }
// render() {
//   return (
// <h1></h1>
//     // <Form action = "/addItem"
//     //   model="user"
//     //   onSubmit={(user) => this.ajax(user)}
//     // >
//     //   <label htmlFor="user.product">Name Of Product:</label>
//     //   <Control.text model="user.product" id="user.product" />
//     //    <label htmlFor="user.description">Description:</label>
//     //   <Control.text model="user.description" id="user.description" />
//     //   <label htmlFor="user.price">Price:</label>
//     //   <Control.text model="user.price" id="user.price" />
     
//     //   <label htmlFor="user.image">Add Picture:</label>
//     //   <Control.text model="user.image" id="user.image" />

//     //   <button type="submit">
//     //     Finish registration!
//     //   </button>
//     // </Form>
//   );
// }
// }

// export default ItemForm