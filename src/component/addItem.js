import { connect } from 'react-redux';
import $ from 'jquery';

import React, { useState ,useEffect} from "react";
import { Control, Form } from 'react-redux-form';
import { storage } from '../firebase';
function ItemForm (props)  {

  const [url, setUrl] = useState("");
   const [image, setImage] = useState("");
    var obj1={category:'food', url:"" ,user:{}}  

 

const ajax=(user)=>{
  
   obj1.user= {user}
   console.log(obj1.url)
 obj1.url=url
 console.log(url)
  $.ajax({
    method: 'POST',
    url:'http://localhost:3000/addItem',//fix it later
    data : JSON.stringify(obj1),
    contentType: "application/json",
    success:function(){
      console.log('success')
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
<button onClick={handleUpload}>Upload</button>
</div>
  }
}


const food=() => {
  if (obj1.category === 'food'){
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
    <button className="btn btn-primary" type="submit"  >Submit</button>
  </div>
    </Form></div>
    )
  }
}

const clothes=()=>{
  if (obj1.category === 'clothes'){
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
    <Control.file model="user.image"className="form-control" aria-label="file example" onChange={uploadImage}  required/>
    {tr2()}
 </div>
      <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
    </Form></div>
    )}}
    const babyproducts=() => {
        if (obj1.category === 'babyproducts'){
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
    if (obj1.category === 'accessories'){
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


  return (
    <div>
     <div>{food()}</div>
     <div>{clothes()}</div>
     <div>{babyproducts()}</div> 
     <div>{accessories()}</div></div> 
  )
  }

  export default  ItemForm
