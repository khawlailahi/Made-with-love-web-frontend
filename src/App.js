import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/aboutus";
import home from "./component/home.js";
import SignUpSeller from "./component/signUpSeller.js";
import addItem from "./component/addItem.js";
import Footer from "./component/Footer.js";
import listOfOrder from "./component/listOfOrder.js";
import Login from "./component/Login.js";
import ItemForm from "./component/addItem.js"
// import Navbar from "./component/layout/Navbar.js";
import SignUpBuyer from "./component/signUpBuyer.js";
import editSellerProfile from "./component/editSellerProfile";
import "./Style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./component/Store.js";
import CatBuyer from "./component/categoryBuyer.js";
import Order from "./component/order.js";
import View from "./component/view.js";
import SellerProfile from "./component/sellerProfile";
import VisitSeller from "./component/VisitSeller";
import CategorySeller from "./component/categorySeller";
var mapStateToProps = (state) => {
  console.log(state, "staaaaat");
  return {
    name: state.catReducer.name,
  };
};
function App(props) {
//   var obj ={token: "jlbhwkfbweklwbflkweebf",id:1, type:"seller" }
// localStorage.setItem("token" , JSON.stringify(obj))
  console.log("caaaat",props)
  var url = `/buyer/${props.name}`
  // var currentUser= JSON.parse(localStorage.getItem("token"))
  // var id= currentUser.id
  // console.log(id, "useer")
  // var urlProfile = `/seller/profile/${id}`
  // var url1 = `/seller/${props.name}`
  console.log(url)
  return (
   <div className="page-container">
     <div className="content-wrap">
    <Router>
   {/* <Navbar/> */}
     <Switch>
     <Route
              path='/seller/profile/:id'
              exact
              component={SellerProfile}
            ></Route>
            <Route path="/seller/visit/:id" exact component={VisitSeller}></Route>
       <Route  path ='/about' exact  component ={About}></Route>
       <Route  path ='/seller/addItem' exact  component ={ItemForm}></Route>
       <Route  path ='/login' exact  component ={Login}></Route>
       <Route  path ='/order' exact  component ={Order}></Route>
       <Route  path ='/home' exact   component={home}></Route>
       <Route  path ='/seller/signup' exact   component={() => <SignUpSeller store={store} />}></Route>
       <Route  path ='/' exact   component={View}></Route>
       <Route  path ='/buyer/signup' exact   component={() => <SignUpBuyer store={store} />}></Route>
       <Route  path ='/buyer/category' exact   component={() => <CatBuyer store={store} />}></Route>
       <Route  path ='/orderList' exact   component={listOfOrder}></Route>
       
       <Route  path ={''+url}  exact   component={() => <CatBuyer store={store} cat={props.name} />}></Route>
       <Route  path ='/buyer/food'  exact   component={() => <CatBuyer store={store} cat="food" />}></Route>
       <Route  path ='/buyer/clothes'  exact   component={() => <CatBuyer store={store} cat="clothes" />}></Route>
       <Route  path ='/buyer/babyproducts'  exact   component={() => <CatBuyer store={store} cat = "babyproducts"/>}></Route>
       <Route  path ='/buyer/accessories'  exact   component={() => <CatBuyer store={store} cat = "accessories"/>}></Route>
       <Route  path ='/order' exact   component={() => <Order/>}></Route>

       {/* <Route  path ={''+url1}  exact   component={() => <CategorySeller store={store} cat={props.name} />}></Route> */}
       <Route  path ='/seller/food'  exact   component={() => <CategorySeller store={store} cat="food" />}></Route>
       <Route  path ='/seller/clothes'  exact   component={() => <CategorySeller store={store} cat="clothes" />}></Route>
       <Route  path ='/seller/babyproducts'  exact   component={() => <CategorySeller store={store} cat = "babyproducts"/>}></Route>
       <Route  path ='/seller/accessories'  exact   component={() => <CategorySeller store={store} cat = "accessories"/>}></Route>
     </Switch>
   {/* <Footer/> */}
    </Router>
    </div></div>
  );
}
export default App;
