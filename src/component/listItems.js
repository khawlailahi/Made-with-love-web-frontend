  
import React from "react";

import { Button,Card, Row , Col} from 'react-bootstrap';
import {Link } from "react-router-dom";
import axios from 'axios';
import $ from "jquery";

  
  

// var componentDidMount=() =>{
//   this.deleteItems();
// }


const ListItems = (props) => {

<<<<<<< HEAD
    var deleteItems=(pk,i) =>{
      console.log(i)
        axios.delete(' http://127.0.0.1:8000/seller/profile/deleteitems/'+pk)
          .then(response => { console.log(response.data) 
          });
=======

  
    var deleteItems=(pk) =>{
        axios.delete('http://127.0.0.1:8000/seller/profile/deleteitems/'+pk)
          .then(response => { console.log(response.data)});
>>>>>>> 79fcb5d77bd63205ede57d91c50658805394cea8
    
    props.items.splice(i,1)

        // this.setState({
        //   items: this.props.items.filter(item => item['pk'] !== pk)
        // })
        console.log(pk)
        // window.location = 'http://127.0.0.1:8000/seller/profile/'+props.id
        // window.location.reload();
        // loadData()
           

      };

      var getDerivedStateFromProps = () => {
        deleteItems()
      }

      // var loadData = (id) => {
      //   var that = this;
      //   console.log(id)
      //   console.log(1111111111111111)
      //  $.ajax({
      //    url:('http://127.0.0.1:8000/seller/profile/items/1'),
      //    type:'GET',
      //    success:function(data){
      //      console.log(data, 'Fetch the data')
      //      var data1 = JSON.parse(data)
      //     // var data1 = data
      //     //  that.setState({ items:data1},()=>{console.log("itemsss",that.state)})
      //      // that.setState(data
      //      // console.log(that.state,'staaate')
      //    },
      //    error : function(error){
      //      console.log(error, 'error in fetch the data')
      //    }
      //  })
      //  console.log("hhhhhhhhhhhh")
      // }

  console.log(props)
  return(
    <div>
   {/* <h1>{item['pk']}</h1> */}
  
   <Row>
        {
           
         props.items.map((item,i )=>{
           return (
              <Col key={i}>
       
           <Card style={{ width: "400px", marginTop: "50px", marginLeft:'50px' }}>
                   <Card.Img
                     variant="top"
                     src={item['fields']['image']}
                     width = '200px' height = '200px'
                   />
                   <Card.Body>
                     <Card.Title style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Name :</label> {item['fields']['productname']}</Card.Title>
                     <Card.Text> <label style={{color:'red', fontWeight:'bold'}}>Product Name :</label>Product Description : {item['fields']['description']}</Card.Text>
                     <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Product Name :</label>Product Price : {item['fields']['price']}</Card.Text>
                     <Link
                       to={{
                         pathname: "/seller/profile/1",
                         
                       }}
                     >
                     <Button
                       variant="primary"
                       style={{ backgroundColor: "red" }}
                     onClick={() => {deleteItems(item['pk'],i)}}
                     >
                       Delete
                     </Button>
                     </Link>
                     <Link
                       to={{
                         pathname: "/seller/editProfile/"+item['pk'] ,
                        //  info: { id: item['pk'] },
                       }}
                     >
                       <Button
                         variant="primary"
                         style={{ backgroundColor: "green", marginLeft: "100px" }}
                       >
                         Edit
                       </Button>
                     </Link>
                   </Card.Body>
                 </Card>
                 </Col> 

         )})
         
        }
        </Row>
        
     
 </div> 
 )  
}

export default ListItems