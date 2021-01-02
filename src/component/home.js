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
  <Carousel.Item interval={1000}  className="col-sm-6">
    <img
      className="d-block w-100"
      src='https://previews.123rf.com/images/golubovy/golubovy1603/golubovy160300104/54302200-food-photography-of-baked-pork-with-fresh-vegetables-home-made-food-photo-for-social-networks-top-vi.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Category Food</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://static2.bigstockphoto.com/0/8/3/large1500/380596804.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Food</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/cinnamon-rolls-sinabon-made-home-lying-grey-table-homemade-cakes-brown-wooden-sweet-141014176.jpg"width = '500px' height = '500px'
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
  <Carousel.Item interval={1000}  className="col-sm-6">
    <img
      className="d-block w-100"
      src='https://www.next.co.uk/nxtcms/resource/blob/804278/b27903a48e38e6e0c04a077af12851f2/next-girls--bridesmaid-dresses-data.jpg'width = '500px' height = '500px'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Category Clothes</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.landsend.com/article/best-work-from-home-clothes-men/images/feat-m.jpg" width = '500px' height = '500px'
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Clothes</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=6&m=916092484&s=612x612&w=0&h=tUKYM82W1Vecsjeat6rl6kTnq7iCFq0JYhI2uR3VxMU=" width = '500px' height = '500px'
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
      src='https://st3.depositphotos.com/3737897/15110/i/1600/depositphotos_151106036-stock-photo-clothing-and-accessories-for-women.jpg'width = '500px' height = '500px'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Category Accessories</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180292570/96250582-stylish-women-accessories-on-wooden-background.jpg"width = '500px' height = '500px'
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Accessories</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://gedaramade.com/wp-content/uploads/2020/11/GiftNfab-natural-stone-hand-made-bracelets-on-GedaraMade-372x400.jpg"width = '500px' height = '500px'
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
      src='https://www.stylishboard.com/wp-content/uploads/2013/05/fi3.jpg' width = '500px' height = '500px'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Category Baby products</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://hipdysplasia.org/wp-content/uploads/2020/05/learn-about-cause.jpg"  width = '500px' height = '500px'
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Category Baby productsl</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://ae01.alicdn.com/kf/H30992dcc27d7495c8498858f9b357886E/2019-Baby-Kids-Winter-Warm-Clothes-Newborn-Baby-Boy-Girl-Children-s-Solid-Hooded-Sweater-3D.jpg" width = '500px' height = '500px'
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