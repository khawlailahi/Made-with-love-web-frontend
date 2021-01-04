import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from "./layout/Navbar.js";
import { Link } from 'react-router-dom'
import {Button  } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import back from "../images/back.jpg"
import logo from "../images/logo.png"

// const player = {
//     color : 'red',
//     fontFamily: 'Gochi Hand'
    

// }
 function View(){
     return (
         <div style={{  width: "100%",
         height: "1030px", backgroundImage: `url(${back})`}}>

        <NavBar/> 
     <div>
 <img  className="text-center col-md-3 col-md-offset-3" src={logo} width='auto' height="auto" style={{margin: '0px 700px 0px 700px'}}></img>
 </div> 
      

  <div className="container">
    <div className="row">
   
    <Link  to="/seller/signup" style={{textDecoration: 'none'}}><div class="col-md-12">
       <p className="mb-0"style={{color:'#fcfbed', fontSize:'20px'}}>Get Started With Your Business</p>
        </div></Link>


        <Link to="/buyer/signup" style={{textDecoration: 'none'}}><div class="col-md-12">
            <p  className="mb-0" style={{color:'#fcfbed',  fontSize:'20px'}}> Find The Best Homemade Products</p>
        </div></Link>


    </div>
</div>
<div tyle={{  width: "100%",
backgroundImage: "url(" + 'https://www.althemist.com/zass/wp-content/themes/zass/image/ripoff.png' + ")"}}></div>
        
        
        
        </div>
    )
}

export default View;