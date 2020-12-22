import { connect } from 'react-redux';
import $ from 'jquery';
import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

   var  time =new Date().toDateString() 
class Order extends React.Component {
  constructor(props) {
    super(props)
}


ajax(order){


  var obj={order}
  obj['a']=0 
obj['date']=time

    $.ajax({
        method: 'POST',
        url:'http://localhost:3000/order',//fix it later
        data : JSON.stringify(obj),
        contentType: "application/json",
        success:function(){
          console.log('success')
        },
        error: function(err){
          console.log(obj)
        }
      })
    }    



render() {
    return ( 
      <div><h5>Date:{time}</h5>
      <Form
        model="order"
        onSubmit={(order) => this.ajax(order)}
        className="row g-3">
         
        <label for="validationDefault01" classNameName="form-label">Quantity:</label>
        <Control.text  name="order" className="form-control" type="number" model="order.quantity"  min="1" id="validationDefault01" required/>

        <br></br>
        <label  for="validationDefault02" className="form-label">Location:</label>
        <Control.text className="form-control" model="order.location" id="order.location" required/>
     
        <br></br>
         <label for="validationDefault02">Phone Number:</label>
        <Control.text className="form-control" model="order.phoneNumber" id="order.phoneNumber" required/>
     
        <br></br>
        <button type="submit">
         Confirm Order
        </button>  
      </Form></div>
    )
 }
//
}
  export default Order
