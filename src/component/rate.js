import React, { useState } from "react";
import  ReactStars  from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import $ from "jquery";

const Rate = (props) => {

    const [hover, setHover] = useState(null);
    const [tr1, setTr1] = useState(2);    
    console.log(props) 
    const ratingChange=(rating) => {
        
        const obj ={rate:rating, pkSeller:props.item.pkSeller,}
        $.ajax({
            method: 'POST',
             url:'http://127.0.0.1:8000/buyer/rating',//fix it later
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
    
        {[...Array(5)].map((star, i) => {
          const valueRating =i+1;
          const rate = 3
          
          return (
           
            <label>
              <input
                style={{ display: "none" }}
                type="radio"
                value={3}
               
              />
              <FaStar
              size ={20}
                color={
                   valueRating <= ( rate)
                    ? "#F9CD56"
                    : "#848481"
                }
            
              />
            </label>
          );
        })}
        <ReactStars
        size ={50}
        onChange={ratingChange}/>
      </div>
  );
};
export default Rate;




