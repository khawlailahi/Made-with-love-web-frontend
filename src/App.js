import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/aboutus'
import home from './component/home.js'
// import addItem from './component/addItem.js'
import SignUpSeller from './component/signUpSeller.js'
// import home from './component/home.js'
import addItem from './component/addItem.js'
// import categoryBuyer from './component/categoryBuyer.js'
// import categorySeller from './component/categorySeller.js'
// import Filter from './component/Filter.js'
import Footer from './component/Footer.js'
// import itemList from './component/itemList.js'
import listOfOrder from './component/listOfOrder.js'
import Login from './component/Login.js'
import Navbar from './component/layout/Navbar.js'
// import Notification from './component/Notification.js'
// import signUpBuyer from './component/signUpBuyer.js'
// import signUpSeller from './component/signUpSeller.js'
// import order from './component/order.js'
import SignUpBuyer from './component/signUpBuyer.js'
<<<<<<< HEAD

=======
>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec
// import Store from './component/Store.js'
// import update from './component/update.js'
// import view from './component/view.js'
// import Visit from './component/Visit.js'
import './Style/app.css';
// import combineReducers from './reducsers/index'
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import signUpSeller from './component/signUpSeller.js';
 

import store from './component/Store.js'

import CatBuyer from './component/categoryBuyer.js'
import Order from './component/order.js'




function App() {
=======
import store from './component/Store.js'
import CatBuyer from './component/categoryBuyer.js'
import Order from './component/order.js'
var mapStateToProps = (state) => {
  // console.log(state, 'staaaaat')
return {
  name: state.catReducer.name,
  
}
}
function App(props) {
  

  console.log("caaaat",props)
  var url = `/buyer/${props.name}`
  console.log(url)
>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec
  return (
   <div className="page-container">
     <div className="content-wrap">
    <Router>  
   <Navbar/>
     <Switch>
<<<<<<< HEAD
       <Route  path ='/about' exact  component ={About}></Route>
       <Route  path ='/signup' exact  component ={signUpSeller}></Route>
=======
     <Route  path ='/about' exact  component ={About}></Route>
>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec
       <Route  path ='/addItem' exact  component ={addItem}></Route>
       <Route  path ='/login' exact  component ={Login}></Route>
       <Route  path ='/order' exact  component ={Order}></Route>
       <Route  path ='/home' exact   component={home}></Route>


<<<<<<< HEAD

      

=======
>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec
       <Route  path ='/seller/signup' exact   component={() => <SignUpSeller store={store} />}></Route>
       <Route  path ='/buyer/signup' exact   component={() => <SignUpBuyer store={store} />}></Route>
       <Route  path ={''+url}  exact   component={() => <CatBuyer store={store} cat={props.name} />}></Route>
       {/* <Route  path ='/buyer/clothes'  exact   component={() => <CatBuyer store={store} cat="clothes" />}></Route>
       <Route  path ='/buyer/babyproducts'  exact   component={() => <CatBuyer store={store} cat = "babyproducts"/>}></Route>
       <Route  path ='/buyer/accessories'  exact   component={() => <CatBuyer store={store} cat = "accessories"/>}></Route> */}
       <Route  path ='/order' exact   component={() => <Order/>}></Route>
     </Switch>
   <Footer/>
    </Router>
    </div>
 </div>
   
  );
}

export default connect(mapStateToProps)(App);
