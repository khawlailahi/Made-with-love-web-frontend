// import { connect } from 'react-redux';
// import $ from 'jquery';
// import React from 'react';
// import { Control, Form, actions } from 'react-redux-form';

// class Order extends React.Component {

// ajax(order){
//     $.ajax({
//         method: 'POST',
//         url:'http://localhost:3000/order',//fix it later
//         data : JSON.stringify(order),
//         contentType: "application/json",
//         success:function(){
//           console.log('success')
//         },
//         error: function(err){
//           console.log('error:' ,err)
//         }
//       })
//     }    



// render() {
//     return (
//       <Form
//         model="order"
//         onSubmit={(order) => this.ajax(order)}
//         >
//         <label htmlFor="order.quantity">Quantity:</label>
//         <Control.text  name="order" type="number" model="order.quantity" id="order.quantity"/><br></br>
//         <label htmlFor="order.location">Location:</label>
//         <Control.text model="order.location" id="order.location" /><br></br>
//          <label htmlFor="order.phoneNumber">Phone Number:</label>
//         <Control.text model="order.phoneNumber" id="order.phoneNumber" />
//         <br></br>
//         <button type="submit">
//          Confirm Order
//         </button>
//       </Form>
//     )
//  }

// }
//   export default Order