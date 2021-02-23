import React from 'react'
import img from  '../images/404.gif'

var style2={
    position: 'absolute',
    top: '15%',
    left:' 50%',
    transform: 'translate(-50%, -50%)',
    color: 'orange',
    fontSize: '60px',
    padding: '30px 200px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center',
}
export default function Notfound() {
    var tokenObj = JSON.parse(localStorage.getItem('token'))

  if(tokenObj){
  if(tokenObj.type ==='buyer'){
  var url = '/home'
 }
  if(tokenObj.type === 'seller'){
  var url = '/home'
}
var x = setTimeout(()=>{
    window.location=""+url
}, 4000)
  }

    return (
        <div>
            <h1 style = {style2}>Oops Something Went Wrong </h1>
            <img src={img} width ="100%" height ="900px"/>
            {x}
    </div>
  );
}
