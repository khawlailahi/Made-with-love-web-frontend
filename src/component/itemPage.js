import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import NavbarBuyer from "./layout/NavbarBuyer.js";
import { Card, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import app from './fireConfig'
export default class ItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.database = app.database().ref('comments')

    this.state = {
      addComment: "",
      data: []
    }
  }

  componentDidMount() {
    let that = this
    $.ajax({
      url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
      method: "GET",
      contentType: "application/json",
      success: (data) => {
        that.setState({ data: data })
        console.log(data)

      },
      error: (err) => { console.log(err) }
    })
  }
  onChangeHandle(event) {

    this.setState({ addComment: event.target.value })

  }



  submitHandle(event) {
    console.log(this)
    var that = this
    var comment = { text: this.state.addComment }
    that.setState({ addComment: "" })
    //if the user is a buyer 
    if (JSON.parse(localStorage.getItem('token'))['type'] === 'buyer') {
      comment.user_id = JSON.parse(localStorage.getItem('token'))['id_store']
      comment.types = 'buyer'
    }
    // if the user is a seller 
    if (JSON.parse(localStorage.getItem('token'))['type'] === 'seller') {
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


        $.ajax({
          url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
          method: "GET",
          contentType: "application/json",
          success: (data) => {
            that.setState({ data: data })
            console.log(data)


          },
          error: (err) => { console.log(err) }
        })



      },
      error: (err) => { console.log(err) }
    })
  }

  deleteComment(comment, i) {
    var that = this
    console.log(comment)
    console.log("clicked")
    axios.delete(' http://127.0.0.1:8000/deleteComment/' + comment)
      .then(response => {
        console.log(response.data)
        $.ajax({
          url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
          method: "GET",
          contentType: "application/json",
          success: (data) => {
            that.setState({ data: data })
            console.log(data)

          },
          error: (err) => { console.log(err) }
        })
      })


  }


  render() {
    //for the input comment (only a buyer or the owner of the store can comment)

    if (JSON.parse(localStorage.getItem('token'))['type'] === 'buyer' || JSON.parse(localStorage.getItem('token'))['id'] === this.props.location.info.item['fields']['storeId']) {
      console.log(this.props.location.info.item['pk'])
      var com = <div><Form><input type="comment" class="form-control" id="exampleInputComment" name='write a Comment' onChange={this.onChangeHandle.bind(this)} aria-describedby="emailHelp" placeholder="add a comment" style={{ width: '700px' }}></input>
        <button type="reset" class="btn btn-danger" style={{ margin: '-62px 1000px 0px 740px' }} onClick={this.submitHandle.bind(this)}>Comment</button>
      </Form><br />
      </div>
    }
    // for the order button (only buyers can order )
    if (JSON.parse(localStorage.getItem('token'))['type'] === 'buyer') {
      console.log(this.props.location.info.item['pk'])
      var order = <Link to={{ pathname: "/order", info: { id: this.props.location.info.item['pk'], name: this.props.location.info.item['fields'].productname, url: this.props.location.info.item['fields'].image, store: this.props.location.info.item['fields'].store, price: this.props.location.info.item['fields'].price, storeId: this.props.location.info.item["fields"].["store_id"] } }}>
        <button type="button" class="btn btn-success" style={{ size: "20px" }}>Order</button>
      </Link>
    }




    console.log(this.props.location.info.cat)
    if (this.props.location.info.cat === 'food')
      var x = <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Category : </label> {this.props.location.info.item['fields'].types} </Card.Text>

    if (this.props.location.info.cat === 'clothes')
      var x = <div><Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Size: </label> {this.props.location.info.item['fields'].size} </Card.Text>
        <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Gender : </label> {this.props.location.info.item['fields'].gender} </Card.Text></div>
    if (this.props.location.info.cat === 'babyproducts')
      var x = <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Gender : </label> {this.props.location.info.item['fields'].gender} </Card.Text>
    if (this.props.location.info.cat === 'accessories')
      var x = <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Material : </label> {this.props.location.info.item['fields'].material} </Card.Text>
    //if(JSON.parse(localStorage.getItem('token'))['type']  === 'seller' && JSON.parse(localStorage.getItem('token'))['id'] ===  this.props.location.info.item['fields']['store'])
    //    var delele = 
    return (
      <div>
        <NavbarBuyer />
        <div style={{ marginLeft: "250px", marginRight: "500px" }}>

          <Col >
            <Card style={{ width: "900px", marginTop: "50px", marginLeft: '90px', padding: '0px 20px 0px 20px', borderRadius: "12px" }}>
              <br />
              <div className="d-flex" style={{ backgroundColor: "#f1f1f1", borderRadius: "12px" }} >
                <div className="p-2" style={{ width: '500px', height: '400px', marginLeft: "20px" }}>
                  <br />
                  <Card.Img
                    variant="top"
                    src={this.props.location.info.item['fields'].image}
                    width='500px' height='300px' border="solid white 20px"
                  /></div>

                <Card.Body> <div className="p-2" style={{ width: '400px', height: '400px', marginLeft: "5px" }} >
                  <br />
                  <Card.Title style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Product Name : </label> {this.props.location.info.item['fields'].productname}</Card.Title>
                  <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Store :</label> {this.props.location.info.item['fields'].store}</Card.Text>
                  <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Description :</label> {this.props.location.info.item['fields'].description}</Card.Text>
                  {x} <Card.Text style={{ fontWeight: 'normal' }}><label style={{ color: "orange", fontWeight: 'bold' }}>Product Price : </label> {this.props.location.info.item['fields'].price}</Card.Text>

                  {order}
                </div>  </Card.Body>


              </div><br />
              <div style={{ borderTop: "solid Lightgray 1px" }}><br />
                {com}
                {this.state.data[0] ? this.state.data.map((comment, i) => {
                  // delete icon for the one who wrote comment and for the seller of the item 

                  if (JSON.parse(localStorage.getItem('token'))["id"] === comment['fields'].idbuyer || JSON.parse(localStorage.getItem('token'))["id_store"] === comment['fields'].idbuyer || JSON.parse(localStorage.getItem('token'))["id"] === comment['fields'].idstore) {
                    // var index=i;
                    var remove = <i class="fas fa-trash-alt" onClick={this.deleteComment.bind(this, comment.pk, i)} style={{ color: "gray", margin: '0px -70px 0px 770px', size: "20px" }} ></i>
                  }

                  return <div key={i}><div style={{ border: "solid Lightgray 1px", borderRadius: "10px", padding: "20px" }}>
                    <h4 style={{ color: "orange", fontWeight: 'bold' }}> {comment['fields']['buyer']}</h4>
                    <h5> {comment['fields']['comment']}{remove}</h5>
                  </div><br /></div>
                }) : null}

              </div>
            </Card>
          </Col>
        </div></div>
    )
  }
}