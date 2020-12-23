
import React, { useState ,useEffect} from "react";
import ReactDOM from 'react-dom';   
import $ from "jquery";

const useFetch = url => {
    const [data, setData] = useState('');  
    useEffect(async () => {
      const response = await fetch(url);
      const responses = await response.json();
      setData((responses)); 
    //   console.log(responses,'fdfdfdesf') 

    }, []);
     return {data}}

  
export default () => {
    const {data} = useFetch("https://jsonplaceholder.typicode.com/users/1/todos")
    console.log(Array.isArray(data) ,"typedata")
if(data)
var c = data.map(tr1=>
    <h1>{tr1.title}</h1>)
  return(
  <div>
  <h1>fhgjhgj</h1>
 {c}
 {/* {data.map(tr1=>
 <h1>{tr1.title}</h1>
 )} */}
   {/* <h1>{data[0].title}</h1> */}
</div>
)}