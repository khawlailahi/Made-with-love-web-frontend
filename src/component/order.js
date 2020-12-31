import $ from 'jquery';
import React from 'react';
import { Control, Form } from 'react-redux-form';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'
import {toast} from 'react-toastify'
import NavbarBuyer from "./layout/NavbarBuyer.js";
   var  time =new Date().toDateString() 
   var price ;
   var quan;
   var total;
   toast.configure();
class Order extends React.Component {
  constructor(props) {
    super(props)
    console.log(props,'prooooops')
 this.state = {
   data:{}
 }
}
ajax(order){
  console.log(this.props.location.info.price,"pay price")
  price= this.props.location.info.price
  var obj={order}
  quan= obj.order.quantity
  total = quan * price * 100
console.log(order, 'ordeeeeer')

obj["item_id"]=this.props.location.info.id
  obj["store_id"]=this.props.location.info.store
  obj['date']=time
this.setState({data:obj})
  // obj["item_id"]=this.props.location.info.id
  // obj["store_id"]=this.props.location.info.store
  // obj['date']=time
  console.log(obj,'objjjjj')
    $.ajax({
      url:'http://127.0.0.1:8000/buyer/order',
        method:'POST',
        data:JSON.stringify(obj),
        contentType: "application/json",
        headers:{'Authorization':JSON.parse(localStorage.getItem('token'))['token']},
        success:function(){
          console.log('success')
          // window.location =`/home`
        },
        error: function(err){
          console.log(err)
        }
      })
    }    
    async handleToken(token, addresses){
    //  var that = this;
      price= 
      console.log({token,addresses}, 'handle toooookeeen')
      token.total = total
      const response = await axios.post('http://127.0.0.1:8000/payments/checkout',{token,addresses})
      const {status} = response.data;
      if(status === 'success') {
        toast('Success! check email for details', {type:"success"})
        window.location =`/home`
      }
      else {
        toast('somthing went wrong', {type:"error"})
      }
    //  var obj = this.state.data
    //   $.ajax({
    //     url:'http://127.0.0.1:8000/buyer/order',
    //       method:'POST',
    //       data:JSON.stringify(obj),
    //       contentType: "application/json",
    //       success:function(){
    //         console.log('success')
    //       },
    //       error: function(err){
    //         console.log(err)
    //       }
    //     })
      }    
render() {
// var x;
//   {this.state.data ?  x = <Redirect to={'/seller/profile'}/>
//   :'not'}
//   console.log(this.props,'proooooops')
// console.log(this.props.location.info.price, 'priiiiiiiice')
    return ( 
      <div>
      < NavbarBuyer/><br/><br/>
      <div style={{maxWidth:'900px' , margin :"0 auto", border :'solid #dcdcdc 2px', border: '2px solid gray',
      borderRadius: "3px", padding:"6px"}}>

       <div >
        <h4 style= {{textAlign:"center"}}>YOUR ORDER</h4>
        <br/><br/>
        <h5 style= {{textAlign:"center", marginTop :"40px"}}>{this.props.location.info.name}</h5>
        </div>
      <div className="d-flex"  >
        <br/>
        <div className="p-2" style= {{marginRight :"30px"}}>
          
        {/* <h5>{this.props.location.info.store}</h5><br/><br/> */}
        <br/><br/> <img src = {this.props.location.info.url} style= {{width:"300px", height:"300px", marginBottton:"30px"}}/>
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
        <StripeCheckout
            stripeKey = 'pk_test_51I2FktCNmtNvriYQGjLYu0G8wYecRexcoEiC52AMMZwsISRlg1irJgpBFMKJ2qwvFSOB48zEuxLlnRaC6lfGbMCs006oNLTZZq'
            token = {this.handleToken}
            amount = {total}
            name={this.props.location.info.productname}
            // billingAddress
            // shippingAddress
            style={{marign:"0 auto", width:"200px" ,textAlign:"center", marginLeft:"30%", marginBottom:'50px'}}
            />
          <button className="btn btn-success" style={{marign:"0 auto", width:"200px", textAlign:"center", marginLeft:"30%", marginBottom:'50px'}}>
        Pay Cash
        </button>
      </Form> 
      </div></div> </div>
      </div>
    )
 }
//
}
  export default Order