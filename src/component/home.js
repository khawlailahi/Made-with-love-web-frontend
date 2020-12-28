import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavbarSeller from './layout/NavbarSeller'
import NavbarBuyer from './layout/NavbarBuyer'
var action = { type: "food_category" };
var actionclothes = { type: "clothes_category" };
var actionbaby = { type: "babyshower_category" };
var actionacc = { type: "accesories_category" };

const getcategoryfood = () => {
  var tokenObj = JSON.parse(localStorage.getItem('token'))
      console.log(tokenObj)
              // if the user is a buyer redirect to home 
      if (tokenObj.type === 'buyer')
      window.location.replace('/buyer/food')
              //if the user if a seller 
      if (tokenObj.type === 'seller')
      window.location.replace(`/seller/food`)
  return action;
};

const getcategoryclothes = () => {
  var tokenObj = JSON.parse(localStorage.getItem('token'))
      console.log(tokenObj)
              // if the user is a buyer redirect to home 
      if (tokenObj.type === 'buyer')
      window.location.replace('/buyer/clothes')
              //if the user if a seller 
      if (tokenObj.type === 'seller')
      window.location.replace(`/seller/clothes`)
  return actionclothes;
};
const getcategorybaby = () => {
  var tokenObj = JSON.parse(localStorage.getItem('token'))
      console.log(tokenObj)
              // if the user is a buyer redirect to home 
      if (tokenObj.type === 'buyer')
      window.location.replace('/buyer/babyproducts')
              //if the user if a seller 
      if (tokenObj.type === 'seller')
      window.location.replace(`/seller/babyproducts`)
  return actionbaby;
};
const getcategoryacc = () => {
  var tokenObj = JSON.parse(localStorage.getItem('token'))
      console.log(tokenObj)
              // if the user is a buyer redirect to home 
      if (tokenObj.type === 'buyer')
      window.location.replace('/buyer/accessories')
              //if the user if a seller 
      if (tokenObj.type === 'seller')
      window.location.replace(`/seller/accessories`)
  return actionacc;

};
// var mapDispatchToProps = (dispatch) =>{
//     return {

//     //     onclickCat : (cat) => {
//     //         action = {type : 'change_category', text:cat}
//     //         dispatch(action);

//     //      }
//     // }
//     const
// }

export default function Home(props) {
  const dispatch = useDispatch()
  var tokenObj = JSON.parse(localStorage.getItem('token'))
  console.log(tokenObj['type'])
  if(tokenObj.type ==='buyer')
  var nav = <NavbarBuyer/>
  if(tokenObj.type === 'seller')
  var nav = <NavbarSeller/>
    return (
        <div>
          {nav}
          <br/>
           <div className="row" style={{margin:"0 auto"}}>
         <Link to='/buyer/food'>
           <div className="col-sm-6" onClick={()=>{  console.log("clickeeed"); dispatch(getcategoryfood()) }} >
        <div className="card"  style={{border: "solid  black 2px",width:'700px',cursor: 'pointer',marginTop:"150px",marginLeft:'100px',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src='https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Category Food</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Food</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Food</h3>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
        </div><br/><br/>
        </div> 
        </Link>
        <Link to='/buyer/clothes'>
          <div className="col-sm-6"  onClick={()=>{  console.log("clickeeed"); dispatch(getcategoryclothes()) }} >
        <div className="card"  style={{border: "solid  black 2px",width:'700px',cursor: 'pointer',marginTop:"150px",marginLeft:'100px',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src='https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Category Clothes</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Clothes</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Clothes</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
        </div><br/><br/>
        </div> 
        </Link>
        <Link to='/buyer/accessories'><div className="col-sm-6" onClick={()=>{  console.log("clickeeed"); dispatch(getcategoryacc()) }}>
        <div className="card"  style={{border: "solid  black 2px",width:'700px',cursor: 'pointer',marginTop:"150px",marginLeft:'100px',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src='https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Category Accessories</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Accessories</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Accessories</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
        </div><br/><br/>
        </div> 
        </Link>
          <Link to='/buyer/babyproducts'><div className="col-sm-6" onClick={()=>{  console.log("clickeeed"); dispatch(getcategorybaby()) }}>
        <div className="card"  style={{border: "solid  black 2px",width:'700px',cursor: 'pointer',marginTop:"150px",marginLeft:'100px',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src='https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Category Baby products</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Baby productsl</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Baby products</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
        </div><br/><br/>
        </div> 
        </Link>
      </div>
    </div>
  );
}