import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/aboutus'
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
import Order from './component/order.js'
// import signUpBuyer from './component/signUpBuyer.js'
// import signUpSeller from './component/signUpSeller.js'
// import Store from './component/Store.js'
// import update from './component/update.js'
// import view from './component/view.js'
// import Visit from './component/Visit.js'
import './Style/app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import signUpSeller from './component/signUpSeller.js';
 

function App() {
  return (
   <div className="page-container">
     <div className="content-wrap">
    <Router>
   <Navbar/>
     <Switch>
       <Route  path ='/about' exact  component ={About}></Route>
       <Route  path ='/signup' exact  component ={signUpSeller}></Route>
       <Route  path ='/addItem' exact  component ={addItem}></Route>
       <Route  path ='/login' exact  component ={Login}></Route>
       <Route  path ='/order' exact  component ={Order}></Route>



      
     </Switch>
   <Footer/>
    </Router>
    </div>
 </div>
   
  );
}

export default App;
