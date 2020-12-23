import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import {  Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
  const [data, setData] = useState("");
  useEffect(async () => {
    const response = await fetch(url);
    const responses = await response.json();
    setData(responses);
    //   console.log(responses,'fdfdfdesf')
  }, []);
  return { data };
};

const delete_item = "delete_item";

function deleteItem(id) {
  return {
    type: delete_item,
    id
  }
  // $.ajax({
  //   url: "/delete/item",
  //   method: "Delete",

  //   success: function (data) {
  //       //redirect to login page
  //     console.log("POST sent successfully!");

  //   },
  //   error: function (err) {
  //     console.log(err);
  //   }
  // })
}

// function deleteTodoAPI (id) {
//   return fetch(`delete/item/${id}`, {
//     method: 'DELETE'
//   })
//   .then(res => res.json())
//   .catch(err => throw err);
// }



export default ({ item }) => {
  let dispatch = useDispatch();
  const { data } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  console.log(Array.isArray(data), "typedata");
  console.log(data, "iteeeeeem");

  if (data)
    var c = data.map((item, i) => (
      // <h1>{tr1.title}</h1>
      <Card style={{ width: "300px", marginTop: "50px" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKmrZJ_8n79cqNTWRLZah6XxPJCzEEwx8Xw&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <Button
            variant="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => dispatch(deleteItem(item.id))}
          >
            Delete
          </Button>
          <Link
            to={{
              pathname: "/seller/editProfile",
              info: { title: item.title },
            }}
          >
            <Button
              variant="primary"
              style={{ backgroundColor: "green", marginLeft: "100px" }}
            >
              Edite
            </Button>
          </Link>
        </Card.Body>
      </Card>
    ));
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to </h1>
      <img
        src="https://thearchitecturedesigns.com/wp-content/uploads/2019/05/23-small-shop-design-ideas-1024x648.jpeg"
        width="100%"
      />
      {c}
      {/* {data.map(tr1=>
 <h1>{tr1.title}</h1>
 )} */}
      {/* <h1>{data[0].title}</h1> */}
      <Link to="/seller/addItem">
        <i className="bi bi-plus-square"></i>
      </Link>
    </div>
  );
};

// import React from 'react';
// import {Card, Button} from 'react-bootstrap'

// var action = {type : 'fetch_seller'}
// const getSellerProfile = () => {

//     return action;
//     }

// export default function SellerProfile() {
//     return (

//         <div>
//          <h1 style={{textAlign:'center'}}>Welcome to </h1>
//          <img src="https://thearchitecturedesigns.com/wp-content/uploads/2019/05/23-small-shop-design-ideas-1024x648.jpeg" width='100%'/>

//          <div>
//          <Card style={{ width: '18rem', marginTop:'50px' }}>
//   <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKmrZJ_8n79cqNTWRLZah6XxPJCzEEwx8Xw&usqp=CAU" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary" style={{backgroundColor:'red'}}>Delete</Button>
//   </Card.Body>
// </Card>

//          </div>

//         </div>

//     )
// }
