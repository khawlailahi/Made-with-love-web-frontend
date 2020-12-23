import React from 'react'
import {Link} from "react-router-dom";
export default function ItemList(props) {
    
    function clicked(id){
        console.log(id)
       }
      
        return (
          <div className="row" style={{margin:"0 auto"}}>
          {props.items.map((item,i) =>{
         return  (
      
          <div className="col-sm-6" key= {item._id} >
      
        <div className="card"  style={{border: "solid  black 2px",width:'800px',cursor: 'pointer',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <img src ={item.url} alt="car" style={{width:'100%', height:"500px", margin:" 0 auto"}}/>
          <div className="card-body">
          <h6  className="card-title">product: {item.userId}</h6>
            <h6 className="card-text">Description: {item.title} $</h6>
            <p className="card-text">Store: {item.completed}</p>
            
            {/* <h6  className="card-title">product: {item.brand}</h6>
            <h6 className="card-text">Description: {item.price} $</h6>
            <p className="card-text">Store: {item.description}</p>
            <p className="card-text">Price: {item.description}</p>
            <p className="card-text">Delievering within: {item.description}</p> */}
            {/* <Link to={{pathname: '/order', state: car.id }}> */}
                <button onClick={()=>{clicked(item._id)}}>Order</button>
                {/* </Link> */}
        </div>
        </div><br/><br/>
        </div> )
         } )}
        
      </div>
      
      )
      }
      