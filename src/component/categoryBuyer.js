import React, { Component } from 'react'
import $ from 'jquery';
import ItemList from "./itemList.js"





 class CatBuyer extends Component {
     
     state = {
         display:false 
     }

    
     
    filterToggle= ()=>{
        console.log("this",this.props)
        const current =this.state.display

      this.setState({
          display : !current
      })
          
         
    }


    render() {
        var content = null ; 
        if(this.state.display ){
            content = <div  className=" p-2  bg-light border-right" id="sidebar-wrapper" style ={{ width:"20rem"}}>
            <div className="sidebar-heading"></div>
            <div className="list-group list-group-flush">

            {/* if Clothes */}
              <label for="gender" style={{textAlign:"center"}}>Select a gender </label>
               <select style={{fontWeight:"bold",border: "solid  black 2px",borderRadius:"6px", size:'30px',cursor: 'pointer'}}>
                 <option  value ="women" style={{textAlign:"center"}}>Women</option>
                <option value ="men">Men</option>
                <option  value ="children">Children</option>
                </select>

                <label for="Size" style={{textAlign:"center"}}>Select a Size </label>
               <select style={{fontWeight:"bold",border: "solid  black 2px",borderRadius:"6px", size:'30px',cursor: 'pointer'}}>
                 <option  value ="S" style={{textAlign:"center"}}>S</option>
                <option value ="M">M</option>
                <option  value ="L">L</option>
                <option  value ="XL">XL</option>
                </select>


                {/* if food */}
                <label for="category" style={{textAlign:"center"}}>Select a Category </label>
               <select style={{fontWeight:"bold",border: "solid  black 2px",borderRadius:"6px", size:'30px',cursor: 'pointer'}}>
                 <option  value ="salty" style={{textAlign:"center"}}>Salty</option>
                <option value ="sweet">Sweet</option>
                </select>

                {/* if Accessories */}
                <label for="material" style={{textAlign:"center"}}>Select the Material </label>
               <select style={{fontWeight:"bold",border: "solid  black 2px",borderRadius:"6px", size:'30px',cursor: 'pointer'}}>
                 <option  value ="gold" style={{textAlign:"center"}}>Gold</option>
                <option value ="silver">Silver</option>
                {/* <option value ="silver">Silver</option> */}
                </select>

            {/* if baby */}
            <label for="gender" style={{textAlign:"center"}}>Select a gender </label>
               <select style={{fontWeight:"bold",border: "solid  black 2px",borderRadius:"6px", size:'30px',cursor: 'pointer'}}>
                 <option  value ="girl" style={{textAlign:"center"}}>Girl</option>
                <option value ="boy">Boy</option>
                </select>
            </div>
          </div>
        }
        return (
            <div>
                
           
            <div className="d-flex">
    

<div className="p-2 container-fluid" style={{margin:"0 auto"}}>

<br/><br/>
<div className="row"  style={{margin:"0 auto"}}>
    
 <ItemList items ={ [{ _id :1 ,brand:"BMW", price: "15000", description:"rtcyvubhjnkxcyvuhbkjxcfgvhbjcfgvhj", url:'https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300'},{ _id :2 ,brand:"BMW", price: "15000", description:"rtcyvubhjnkxcyvuhbkjxcfgvhbjcfgvhj", url:'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/recipes/baking/basic-cupcake-recipe-178092992-1280.jpg'},{ _id :3 ,brand:"BMW", price: "15000", description:"rtcyvubhjnkxcyvuhbkjxcfgvhbjcfgvhj", url:'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/recipes/baking/basic-cupcake-recipe-178092992-1280.jpg'},{ _id :4,brand:"BMW", price: "15000", description:"rtcyvubhjnkxcyvuhbkjxcfgvhbjcfgvhj", url:'http://nycbirthdaycakes.com/wp-content/uploads/2015/11/chocolate-birthday-cake-with-rose_name_pix_84a2.png'},{ _id :5 ,brand:"BMW", price: "15000", description:"rtcyvubhjnkxcyvuhbkjxcfgvhbjcfgvhj"}]} /> 

</div></div>
<div className="d-flex toggled" id="wrapper" >
    <div className="p-2">
<button className="btn btn-primary" id="menu-toggle" onClick = {this.filterToggle}>Filter</button>
</div>
{content}
{/* <div  className=" p-2  bg-light border-right" id="sidebar-wrapper" style ={{ width:"20rem"}}>
      <div className="sidebar-heading"></div>
      <div className="list-group list-group-flush">
      <img  alt="add"style={{height:"500px", width:"300px"}}/>
      <img alt="add" style={{height:"500px", width:"300px"}}/>

      </div>
    </div> */}
</div>
</div>



</div>
        )
    }
}

export default  CatBuyer; 