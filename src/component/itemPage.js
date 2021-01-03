import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import $ from 'jquery';
import NavbarBuyer from "./layout/NavbarBuyer.js";
import { Card, Col} from 'react-bootstrap';
export default class ItemPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            addComment:"", 
            data :[]
        }
    }

    componentDidMount(){
        let that = this 
        $.ajax({
            url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
            method: "GET", 
            contentType: "application/json",
            success: (data) => {
           that.setState({data: data})
              
           },
            error: (err) => { console.log(err) }
          })
    }
    onChangeHandle(event){

        this.setState({addComment:event.target.value})
       
    }



    submitHandle(event){
        console.log(this)
        var that = this 
        var comment = { text: this.state.addComment}
        //if the user is a buyer 
        if(JSON.parse(localStorage.getItem('token'))['type']  === 'buyer'){
         comment.user_id = JSON.parse(localStorage.getItem('token'))['id_store']
         comment.types = 'buyer'
        }
        // if the user is a seller 
        if(JSON.parse(localStorage.getItem('token'))['type']  === 'seller'){
        comment.user_id = JSON.parse(localStorage.getItem('token'))['id']
        comment.types = 'seller'
        }
        comment.item_id = this.props.location.info.item['pk']

        console.log(comment)
            $.ajax({
              url: 'http://127.0.0.1:8000/comment',
              method: "POST", 
              data: JSON.stringify(comment),
              contentType: "application/json",
              success: (user) => {
                
                console.log( user.username, "username");
                var data =  that.state.data
                data.push({fields:{comment:comment.text, idbuyer:user.username} })
                that.setState({
                    data : data
                })


                
             },
              error: (err) => { console.log(err) }
            })
      }
render () {
    //for the input comment 
   if(JSON.parse(localStorage.getItem('token'))['type']  === 'buyer' || JSON.parse(localStorage.getItem('token'))['id'] ===  this.props.location.info.item['fields']['store'] ){
       console.log(this.props.location.info.item['pk'])
       var com = <div><input type="comment" class="form-control"  id="exampleInputComment" name='addComment'  onChange={this.onChangeHandle.bind(this)} aria-describedby="emailHelp" placeholder="Add Comment"  style ={{width:'200px'}}></input>
       <button type="button" class="btn btn-danger" style ={{margin :'-50px 100px 0px 250px'}} onClick={this.submitHandle.bind(this)}>Comment</button></div>
   }
// for the order button 
if(JSON.parse(localStorage.getItem('token'))['type']  === 'buyer' ){
    console.log(this.props.location.info.item['pk'])
    var order = <Link to={{pathname:"/order", info: {id: this.props.location.info.item['pk'], name:this.props.location.info.item['fields'].productname, url: this.props.location.info.item['fields'].image, store: this.props.location.info.item['fields'].store, price: this.props.location.info.item['fields'].price }}}>
    <button>Order </button> 
          </Link>
}




    console.log(this.props.location.info.cat)
    if (this.props.location.info.cat=== 'food')
    var x = <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Category : </label> {this.props.location.info.item['fields'].types} </Card.Text>
   
    if(this.props.location.info.cat === 'clothes')
        var x = <div><Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Size: </label> {this.props.location.info.item['fields'].size} </Card.Text>
        <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Gender : </label> {this.props.location.info.item['fields'].gender} </Card.Text></div>
     if(this.props.location.info.cat === 'babyproducts')
     var x = <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Gender : </label> {this.props.location.info.item['fields'].gender} </Card.Text>
     if(this.props.location.info.cat === 'accessories')
     var x = <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Material : </label> {this.props.location.info.item['fields'].material} </Card.Text>
   //if(JSON.parse(localStorage.getItem('token'))['type']  === 'seller' && JSON.parse(localStorage.getItem('token'))['id'] ===  this.props.location.info.item['fields']['store'])
//    var delele = 
     return(
          <div>
              <NavbarBuyer/>
            <Col>
            <Card style={{ width: "800px", marginTop: "50px", marginLeft:'90px', padding:'0px 20px 0px 20px' }}>
              <br/>
              <div className= "d-flex">
              <div className= "p-2">
                    <Card.Img
                      variant="top"
                      src={this.props.location.info.item['fields'].image}
                      width = '500px' height = '300px'
                    /></div>
                   
                    <Card.Body> <div className= "p-2">
                        <br/>
                      <Card.Title style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Name : </label> {this.props.location.info.item['fields'].productname}</Card.Title>
                      <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Store :</label> {this.props.location.info.item['fields'].store}</Card.Text>
                     <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Description :</label> {this.props.location.info.item['fields'].description}</Card.Text>
                     {x} <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Price : </label> {this.props.location.info.item['fields'].price}</Card.Text>
                     
                     {order}
                   </div>  </Card.Body>
                   
                         
                 </div><br/>
                 <div style={{borderTop:"solid Lightgray 1px"}}><br/>
                 {com}
                        { this.state.data[0]? this.state.data.map((comment,i)=>{
                            return  <div><div style={{border:"solid Lightgray 1px", borderRadius:"4px", padding:"20px"}}>
                                 <h3> {comment['fields']['idbuyer']}</h3>
                                 <h5> {comment['fields']['comment']}</h5>
                             </div><br/></div>
                         }): null}
                   
                         </div>
                 </Card>
                 </Col> 
          </div>
    )
}
}