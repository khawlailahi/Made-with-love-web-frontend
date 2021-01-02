import React, { useState } from "react";
import { storage } from '../firebase';
import { Control, Form } from 'react-redux-form';
import {useEffect} from "react"

// import store from './Store';
// import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavbarBuyer from './layout/NavbarBuyer'
function SettingProfile ()  {
    const [location, setLocation] = useState("");
    const [username, setUsername] = useState("");
    const [storeName, setstoreName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [data1, setData1] = useState("");
    const [data, setData] = useState("");

    const [url1, setUrl1] = useState("");

    const [deliver, setDeliver] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [counter , setCounter] = useState(false)
    const [counter2 , setCounter2] = useState(false)
    const [counter3 , setCounter3] = useState(false)
    const [counter4 , setCounter4] = useState(false)
    const [counter5 , setCounter5] = useState(false)
    const [counter6 , setCounter6] = useState(false)


    useEffect(()=>{
      if (JSON.parse(localStorage.getItem('token'))['type'] === 'buyer'){
      console.log('ggg',JSON.parse(localStorage.getItem('token'))['type'])
      setUrl1("http://127.0.0.1:8000/buyer/getAll/")
      }else{
        setUrl1("http://127.0.0.1:8000/seller/getAll/")
      }
      console.log(url1)
        $.ajax({
        method:'GET',
        url: url1,
        contentType: "application/json",
        headers:{'Authorization':JSON.parse(localStorage.getItem('token')).token},

        success:function(res){
          // window.location="/settings"     
          setData1(res)
          console.log(res)
          console.log(res)
          console.log(res)
setData('yess')


        },
        error: function(err){
          console.log(err)
        }
      })}
, [data])




const buyerSettings=()=>{ 
if (JSON.parse(localStorage.getItem('token'))['type'] === 'buyer' && data1 !== ""){

  // setUrl1('http://127.0.0.1:8000/buyer/getAll/')

    return <div>
    <button onClick={count}>change Password </button>{showInput()}<br></br><br></br>
    <button onClick={count2}> change Location</button>{locationn()}<br></br>
    <button onClick={count3}> change PhoneNumber</button>{phonee()}<br></br>
    <button onClick={count4}> change userName</button>{user()}<br></br>
</div>

}

}
const count =()=>{
   setCounter(!counter)
   
}
const count2 =()=>{
    setCounter2(!counter2)
    
 }
 const count3 =()=>{
    setCounter3(!counter3)
 }
 const count4 =()=>{
    setCounter4(!counter4)
    
 }


 const count5 =()=>{
  setCounter5(!counter5)
  
}
const count6 =()=>{ 

  setCounter6(!counter4)
  
}
////////////PASSS///////////////
const showInput =()=>{
if(counter === true) { 
 var x = <div>
 <Form
 model="password"
 onSubmit={(password) => ajaxPass(password)}
>
<div class="col-md-3">
<div className="col-md-4">
      <label htmlFor="password.oldPassword"  className="form-label" >Old Password:</label>
      <Control type='password' model="password.oldPassword" id="password.oldPassword" className="form-control" required/>
      </div>
      <div className="col-md-4">
      <label htmlFor="password.newPassword"  className="form-label" >New Password</label>
      <Control  type='password' model="password.newPassword" id="password.newPassword" className="form-control" required/>
      <div className="col-12">
    <button className="btn btn-primary" type="submit"  >Submit</button>
  </div>
      </div></div></Form></div>}
if (counter === false){
   var x=null
}
return x

}
const ajaxPass=(password)=>{
    $.ajax({
        method: 'POST',
        url:'http://127.0.0.1:8000/buyer/changePassword',//fix it later
        data : JSON.stringify(password),
        contentType: "application/json",
        success:function(){
          console.log('success')
        },
        error: function(err){
          console.log(password)
        }
      })
}
///////////////LOCATION//////////////////
const takevalue=(e)=>{
setLocation(e.target.value)
console.log(location)
}
const ajaxLoc=()=>{
  const obj = {location : location}
    $.ajax({
        method: 'POST',
        url:'http://127.0.0.1:8000/buyer/location',//fix it later
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


const locationn=()=>{
    if (counter2 === true){
        return <div>
        <div className="col-md-3">
        <label  className="form-label">New Location :</label>
        <input  className="form-control" defaultValue={data1[0].fields.location} onChange= {takevalue}/>
        </div>
        <button className="btn btn-primary"  name="location" onClick={ajaxLoc}>Submit</button>
</div>
    }
}
//////////////////////////NUMBER//////////////

const phonee=()=>{
    if (counter3 === true){
        return <div>
        <div className="col-md-3">
        <label  className="form-label">New PhoneNumber :</label>
        <input  className="form-control" defaultValue={data1[0].fields.phonenumber} onChange={takevaluePH} />
        </div>
        <button className="btn btn-primary" onClick={ajaxphone}>Submit</button>
</div>
    }
}
const takevaluePH=(e)=>{
    setPhoneNumber(e.target.value)
    console.log(phoneNumber)
    }

    const ajaxphone=()=>{
      const obj ={phoneNumber : phoneNumber}
        $.ajax({
            method: 'POST',
            url:'http://127.0.0.1:8000/buyer/phoneNumber',//fix it later
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
    ////////////////////////////////username
    const ajaxUN=()=>{
      const obj ={userName:username}
        $.ajax({
            method: 'POST',
            url:'http://127.0.0.1:8000/buyer/userName',//fix it later
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
    const takevalueUN=(e)=>{
        setUsername(e.target.value)
        console.log(username)
        }

    const user=()=>{
        if (counter4 === true){
            return <div>
            <div className="col-md-3">
            <label  className="form-label">New userName :</label>
            <input  className="form-control" defaultValue={data1[0].fields.username} onChange= {takevalueUN}/>
            </div>
            <button className="btn btn-primary"  onClick={ajaxUN}>Submit</button>
    </div>
        }
    }
    
/////////////////////////////////////////////////////////////////////////for sellerr//////////////////////////////////////////////////////////////////////////////////////////

const sellerSettings=()=>{ 
    if (JSON.parse(localStorage.getItem('token'))['type'] === 'seller'){
        return <div>
        <button onClick={count}>Change Password </button>{showInputPass()}<br></br><br></br>
       <button onClick={count3}> Change storeName</button>{storeNamee()}<br></br>
       <button onClick={count2}> Change Location</button>{locationn2()}<br></br>
        <button onClick={count4}> Change Description</button>{descriptionn()}<br></br>
        <button onClick={count5}> Change Deliver Order WithIn:</button>{deliverrr()}<br></br>  
        <button onClick={count6}> Change Your Store Image:</button>{imagee()}<br></br>  

  
    </div>
    
    }}
///////////////PASS
const showInputPass =()=>{
  if(counter === true) { 
   var x = <div>
   <Form
   model="password"
   onSubmit={(password) => ajaxPassword(password)}
  >
  <div class="col-md-3">
  <div className="col-md-4">
        <label htmlFor="password.oldPassword"  className="form-label" >Old Password:</label>
        <Control type='password' model="password.oldPassword" id="password.oldPassword" className="form-control" required/>
        </div>
        <div className="col-md-4">
        <label htmlFor="password.newPassword"  className="form-label" >New Password</label>
        <Control  type='password' model="password.newPassword" id="password.newPassword" className="form-control" required/>
        <div className="col-12">
      <button className="btn btn-primary" type="submit"  >Submit</button>
    </div>
        </div></div></Form></div>}
  if (counter === false){
     var x=null
  }
  return x
  
  }
  const ajaxPassword=(password)=>{
      $.ajax({
          method: 'POST',
          url:'http://127.0.0.1:8000/seller/changePassword',
          data : JSON.stringify(password),
          contentType: "application/json",
          success:function(){
            console.log('success')
          },
          error: function(err){
            console.log(password)
          }
        })
  }




    ///////////STORE
  const storeNamee = ()=>{
    if (counter3 === true){
          return <div>
          <div className="col-md-3">
          <label  className="form-label">New storeName :</label>
          <input  className="form-control" defaultValue={data1[0].fields.store_name} onChange= {takevalueSN}/>
          </div>
          <button className="btn btn-primary"  onClick={ajaxSN}>Submit</button>
  </div>
      }
  }
  const takevalueSN=(e)=>{
    setstoreName(e.target.value)
    console.log(storeName)
    }

    const ajaxSN=()=>{
      const obj ={storeName : storeName}
      $.ajax({
          method: 'POST',
          url:'http://127.0.0.1:8000/seller/storeName',//fix it later
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
////////////////////////////////////////////////////////////////////LOCATION
  const locationn2=()=>{
      if (counter2 === true){
          return <div>
          <div className="col-md-3">
          <label  className="form-label">New Location :</label>
          <input  className="form-control" defaultValue={data1[0].fields.location} onChange= {takevalueLoc}/>
          </div>
          <button className="btn btn-primary" name="location" onClick={ajaxLoca}>Submit</button>
  </div>
      }
  }

const takevalueLoc=(e)=>{
  setLocation(e.target.value)
  console.log(location)
  }
  const ajaxLoca=()=>{
    const obj = {location:location}
      $.ajax({
          method: 'POST',
          url:'http://127.0.0.1:8000/seller/location',//fix it later
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

/////////////////////////DESCRIPTION




  const descriptionn = ()=>{
    if (counter4 === true){
          return <div>
          <div className="col-md-3">
          <label  className="form-label">New Description :</label>
          <input  className="form-control" defaultValue={data1[0].fields.description} onChange= {takevalueD}/>
          </div>
          <button className="btn btn-primary" onClick={ajaxD}>Submit</button>
  </div>
      }
  }

  const takevalueD=(e)=>{
    setDescription(e.target.value)
    console.log(description)
    }

    const ajaxD=()=>{
      const obj = {description:description}

      $.ajax({
          method: 'POST',
          url:'http://127.0.0.1:8000/seller/description',//fix it later
          data : JSON.stringify(obj),
          contentType: "application/json",
          success:function(){
            console.log('success')
          },
          error: function(err){
            console.log(obj)
          }
        })}
///////////////////////////////////////////////////////////////////

/////////DELIVERY

  const deliverrr = ()=>{
    if (counter5 === true){
          return <div>
          <label  className="form-label">Change Delivery Time:</label><br></br>
          < select className="form-select" onChange={takevalueDe} required>
            <option selected disabled value="" >Choose The Type</option>
            <option value ="12 Hours">12 Hours</option>
            <option value ="24 Hours">24 Hours</option>
            <option value ="Day">Day</option>    
             </select>
        
        <button className="btn btn-primary" name="location" onClick={ajaxDe}>Submit</button>
<br></br></div>
      }
  }
 const ajaxDe=()=>{
   const obj = {delivery : deliver}
     $.ajax({
        method: 'POST',
         url:'http://127.0.0.1:8000/delivery',//fix it later
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
  const takevalueDe=(e)=>{
    setDeliver(e.target.value)
    console.log(deliver)
    }


    ///////////////////////image/////////////////////
    const imagee = ()=>{
      if (counter6 === true){
       
            return <div>
    <input type="file" className="form-control" aria-label="file example" onChange={uploadImage}  required/>
          {tr2()}
          <button className="btn btn-primary" name="location" onClick={ajaxImage}>Submit</button>
  <br></br></div>
        }
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
       console.log(url)
      if(image !== ""){
    return <div>
    <img src={url}/>
    <input type ='button' value ='Upload' onClick={handleUpload}/>
    </div>
      }
    }
    const ajaxImage=()=>{
      const obj = {Image : url}
        $.ajax({
           method: 'POST',
            url:'http://127.0.0.1:8000/seller/image',//fix it later
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
return (
    <div>
<div>
    
    {buyerSettings()}</div>
    <div>{sellerSettings()}</div></div>
)}
export default SettingProfile
