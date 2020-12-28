
import $ from 'jquery';
import React from 'react';
import { Control, Form } from 'react-redux-form';

   var  time =new Date().toDateString() 

   
class Order extends React.Component {
  constructor(props) {
    super(props)
}


ajax(order){


  var obj={order}
  console.log(this.props)
  obj["item_id"]=this.props.location.info.id
  obj["store_id"]=this.props.location.info.store
obj['date']=time
console.log(obj)
    $.ajax({
      url:'https://backend-made-with-love.herokuapp.com/buyer/order',
        method:'POST',
        
        contentType: "application/json",
        success:function(){
          console.log('success')
          window.location =`/home`
        },
        error: function(err){
          console.log(err)
        }
      })
    }    



render() {
    return ( 
      <div style={{maxWidth:'900px' , margin :"0 auto", border :'solid #dcdcdc 2px', border: '2px solid gray',
      borderRadius: "3px", padding:"6px"}}>
       <div >
        <h4 style= {{textAlign:"center"}}>YOUR ORDER</h4>
        {/* <br/><br/> */}
        <h5 style= {{textAlign:"center", marginTop :"40px"}}>{this.props.location.info.name}</h5>
        </div>
      <div className="d-flex"  >
       
        <br/>
        <div className="p-2" style= {{marginRight :"30px"}}>
        
        
        <h5>{this.props.location.info.store}</h5><br/><br/>
        <img src = {this.props.location.info.url} style= {{width:"300px", height:"300px", marginBottton:"30px"}}/>
          </div>
      <div className="p-2">
        {/* <h5>{this.props.location.info.name}</h5> */}
        <br/><br/>
      <Form
        model="order"
        onSubmit={(order) => this.ajax(order)}
        className="row g-3"
        style={{maxWidth:'500px' , border :'solid lightGray 2px', border: '2px solid gray',
        borderRadius: "3px", padding:"6px"}}>
         
        <label for="validationDefault01" classNameName="form-label">Quantity:</label>
        <Control.text name="order" className="form-control" type="number" model="order.quantity"  min="1" id="validationDefault01" required />

        <br></br>
        <label  for="validationDefault02" className="form-label">Location:</label>
        <Control.text className="form-control" model="order.location" id="order.location" required/>
     
        <br></br>
         <label for="validationDefault02">Phone Number:</label>
        <Control.text className="form-control" model="order.phoneNumber" id="order.phoneNumber" required/>
     
        <br/><br/><br/><br/>
        <button class="btn btn-success" type="submit" style={{marign:"0 auto", width:"200px", textAlign:"center", marginLeft:"30%"}}>
         Confirm Order
        </button> 
      </Form></div></div> </div>
    )
 }
//
}
  export default Order
