import { connect } from 'react-redux';
import $ from 'jquery';

import React, { useState ,useEffect} from "react";
import { Control, Form } from 'react-redux-form';
import { storage } from '../firebase';
function ItemForm (props)  {

  const [url, setUrl] = useState("");
   const [image, setImage] = useState("");
    var obj={category:"food"}
var obj1;
 

const ajax=(user)=>{
  
   obj1= Object.assign({} ,user)
 console.log(url)
 obj1['url'] = url
 obj1['category'] ='food'
 console.log(obj1)
  $.ajax({
    method: 'POST',
    url:'http://127.0.0.1:8000/seller/addItem',//fix it later
    data : JSON.stringify(obj1),
    contentType: "application/json",
    success:function(){
      console.log(obj1)
    },
    error: function(err){
      console.log(obj1)
    }
  })
}
const handleUpload=(e)=>{ 
  console.log(this)  
    const uploadTask = storage.ref(`imagee/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
         
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("imagee")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
             console.log(url)
            });
        }
      );}
    
const uploadImage=(e)=>{
   if (e.target.files[0]) {
        setImage(e.target.files[0])
   }}


 const tr2=()=>{
  if(image !== ""){
return <div>
<img src={url}/>
<input type="button"   value="Add to favorites" onClick={handleUpload}></input>
</div>
  }
}


const food=() => {
  if (obj.category === 'food'){
    return(
    <div>
      <Form
      model="user"
     onSubmit={(user) => ajax(user)}
    >
    <div class="col-md-3">
    <label  className="form-label">Category:</label><br></br>
    <Control.select model="user.type" className="form-select"  required>
      <option selected disabled value="" >Choose the type</option>
      <option  value ="Salty">Salty</option>
      <option  value ="Sweet">Sweet</option>     
       </Control.select>

  </div><br></br>

    <div className="col-md-4">
      <label htmlFor="user.product"  className="form-label" >Name Of Product:</label>
      <Control.text model="user.product" id="user.product" className="form-control" required/>
      </div>

      <div className="col-md-3">
       <label htmlFor="user.description" className="form-label">Description:</label>
      <Control.text model="user.description" id="user.description" className="form-control" required />
      </div>

      <div className="col-md-3">
      <label htmlFor="user.price" className="form-label">Price:</label>
      <Control.text model="user.price" id="user.price" className="form-control" required/>
      </div>



      <div className="mb-3">   
     <label htmlFor="user.image" className="form-label">Add Picture:</label>
    <Control.file model="user.image"className="form-control" aria-label="file example" onChange={uploadImage}  required/>
    {tr2()}
 </div>
  
      <div className="col-12">
    <button className="btn btn-primary" type="submit"   >Submit</button>
  </div>
    </Form></div>
    )
  }
}

const clothes=()=>{
  if (obj.category === 'clothes'){
    return(
    <div>
      <Form
      model="user"
      onSubmit={(user) => ajax(user)}
    >
    <div class="col-md-3">
    <label  className="form-label">Gender:</label><br></br>
    <Control.select model="user.gender" className="form-select"  required>
      <option selected disabled value="" >Choose the gender</option>
      <option  value ="Male">Male</option>
      <option  value ="Female">Female</option>
       </Control.select>
  </div><br></br>
  <div class="col-md-3">
    <label  className="form-label">Size:</label><br></br>
    <Control.select model="user.size" className="form-select"  required>
      <option selected disabled value="" >Choose the size</option>
      <option  value ="S">S</option>
      <option  value ="M">M</option>
      <option  value ="L">L</option>
       </Control.select>
  </div><br></br>
    <div className="col-md-4">
      <label htmlFor="user.product"  className="form-label" >Name Of Product:</label>
      <Control.text model="user.product" id="user.product" className="form-control" required/>
      </div>
      <div className="col-md-3">
       <label htmlFor="user.description" className="form-label">Description:</label>
      <Control.text model="user.description" id="user.description" className="form-control" required />
      </div>
      <div className="col-md-3">
      <label htmlFor="user.price" className="form-label">Price:</label>
      <Control.text model="user.price" id="user.price" className="form-control" required/>
      </div>
      <div className="mb-3">
     <label htmlFor="user.image" className="form-label">Add Picture:</label>
    <Control.file className="form-control" aria-label="file example" onChange={uploadImage}  required/>
    {tr2()}
 </div>
      <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
    </Form></div>
    )}}
    const babyproducts=() => {
        if (obj.category === 'babyproducts'){
         return(
        <div>
                <Form
                model="user"
                onSubmit={(user) => ajax(user)}
              >
           <div class="col-md-3">
          <label  className="form-label">Gender:</label><br></br>
          <Control.select model="user.gender" className="form-select"  required>
            <option selected disabled value="" >Choose the gender</option>
            <option  value ="Male">Male</option>
            <option  value ="Female">Female</option>
             </Control.select>
        </div><br></br>
        <div className="col-md-4">
      <label htmlFor="user.product"  className="form-label" >Name Of Product:</label>
      <Control.text model="user.product" id="user.product" className="form-control" required/>
      </div>
      <div className="col-md-3">
       <label htmlFor="user.description" className="form-label">Description:</label>
      <Control.text model="user.description" id="user.description" className="form-control" required />
      </div>
      <div className="col-md-3">
      <label htmlFor="user.price" className="form-label">Price:</label>
      <Control.text model="user.price" id="user.price" className="form-control" required/>
      </div>
      <div className="mb-3">
     <label htmlFor="user.image" className="form-label">Add Picture:</label>
    <Control.file model="user.image"className="form-control" aria-label="file example" onChange={uploadImage}  required/>
    {tr2()}
 </div>
      <div className="col-12">
    <button className="btn btn-primary" type="submit"  >Submit</button>
  </div>
    </Form></div>
             )
           }
         }
  const accessories=() => {
    if (obj.category === 'accessories'){
     return(
       <div>
       <Form
        model="user"
      onSubmit={(user) => ajax(user)}
             >
          <div class="col-md-3">
         <label  className="form-label">Material:</label><br></br>
         <Control.select model="user.gender" className="form-select"  required>
           <option selected disabled value="" >Choose the material</option>
           <option  value ="Silver">Silver</option>
           <option  value ="Gold">Gold</option>
            </Control.select>
       </div><br></br>
       <div className="col-md-4">
     <label htmlFor="user.product"  className="form-label" >Name Of Product:</label>
     <Control.text model="user.product" id="user.product" className="form-control" required/>
     </div>
     <div className="col-md-3">
      <label htmlFor="user.description" className="form-label">Description:</label>
     <Control.text model="user.description" id="user.description" className="form-control" required />
     </div>
     <div className="col-md-3">
     <label htmlFor="user.price" className="form-label">Price:</label>
     <Control.text model="user.price" id="user.price" className="form-control" required/>
     </div>
     <div className="mb-3">
    <label htmlFor="user.image" className="form-label">Add Picture:</label>
   <Control.file model="user.image" className="form-control" aria-label="file example" onChange={uploadImage}  required/>
   {tr2()}
 </div>
     <div className="col-12">
   <button className="btn btn-primary" type="submit"  >Submit</button>
 </div>
   </Form></div>
            )
          }
        }


  return (
    <div>
     <div>{food()}</div>
     <div>{clothes()}</div>
     <div>{babyproducts()}</div> 
     <div>{accessories()}</div></div> 
  )
  }

  export default  ItemForm

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
//     // <Form
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
