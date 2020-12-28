import React from 'react'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import  { Redirect } from 'react-router-dom'

>>>>>>> 79fcb5d77bd63205ede57d91c50658805394cea8
export default function ItemList(props) {

  console.log(props,'iteeeem props')
    
    
      
        return (
          <div className="row" style={{margin:"0 auto"}}>
          {props.items.map((item,i) =>{
         return  (
      
          <div className="col-sm-6" key= {item['pk']} >
      
        <div className="card"  style={{border: "solid  black 2px",width:'600px',cursor: 'pointer',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <img src ={item['fields'].image} alt="car" style={{width:'100%', height:"500px", margin:" 0 auto"}}/>
          <div className="card-body">
          <h2  className="card-title">product: {item['fields'].productname}</h2>
          <h3 className="card-text">Price: {item['fields'].price} $</h3>
            <h5 className="card-text">Description: {item['fields'].description} </h5>

            <p className="card-text">Store: {item['fields'].store}</p>
            {/* <button onClick={()=>{clicked(item['pk'])}}> 
                Order
<<<<<<< HEAD
                </button> */}
                <button>
                  <Link to={{pathname:"/order", info: {id:item['pk'], name:item['fields'].productname, url:item['fields'].image, store:item['fields'].store }}}>
                  Order
                  </Link>
                  </button> 
=======
                </Link></button> */}
                <button><Link to={{pathname:"/order", info: {id:item['pk'], name:item['fields'].productname, url:item['fields'].image, store:item['fields'].store, price:item['fields'].price }}}>Order</Link></button>
                {/* <Link to={{pathname: '/order', info: {id:item['pk'], name:item['fields'].productname, url:item['fields'].image, store:item['fields'].store }}}></Link> */}
>>>>>>> 79fcb5d77bd63205ede57d91c50658805394cea8
        </div>
        </div><br/><br/>
        </div> )
         } )}
        
      </div>
      
      )
      }
      