import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from "./layout/Navbar.js";
import { Link } from 'react-router-dom'
import {Button  } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";

// const player = {
//     color : 'red',
//     fontFamily: 'Gochi Hand'
    

// }
 function View(){
     return (
         <div>
        <Navbar/> 
        
     <ReactPlayer  url ='https://www.youtube.com/watch?v=5yOwCsF7KU8'  width ="50%" height= "500px" style={{marginTop:"20px"}} /><br/>
     <div className='styleFont' style={{marginLeft:"55%", marginTop:'-400px'}}>
     <h1>- When you support a small business,  </h1><br/><h1 >you are supporting a dream.</h1>
     <h1 style={{marginTop:'70px'}}>- When life gives you hands,  </h1><br/><h1 >make handmade.</h1>
     </div>

     <div style={{marginTop:"120px"}}>
      <Link to="/buyer/signup">


             <Button variant="primary" size="lg" active style={{width:'48%', backgroundColor:'#807978',borderRadius:'9px', marginLeft:'20px',borderColor:'black',borderStyle:'solid', borderWidth:'2px'}}>
   Find The Best Homemade Products
  </Button></Link>
  <Link  to="/seller/signup">
  <Button  size="lg" active style={{width:'48%', backgroundColor:'#807978',borderRadius:'9px', marginLeft:'20px', borderColor:'black',borderStyle:'solid', borderWidth:'2px'}} >
 Get Started With Your Business
  </Button></Link>

  </div>
         </div>
     )
 }

 export default View;