import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './component/home.js';
import addItem from './component/addItem.js';
import categoryBuyer from './component/categoryBuyer.js';
import categorySeller from './component/categorySeller.js';
import Filter from './component/Filter.js';
import Footer from './component/Footer.js';
import itemList from './component/itemList.js';
import listOfOrder from './component/listOfOrder.js';
import Login from './component/Login.js';
import Nav from './component/Nav.js';
import Notification from './component/Notification.js';
import order from './component/order.js';
import SignUpBuyer from './component/signUpBuyer.js';
import signUpSeller from './component/signUpSeller.js';
import Store from './component/Store.js';
import update from './component/update.js';
import view from './component/view.js';
import Visit from './component/Visit.js';
import store from './store../index'
function App() {
  return (
    <div className="App">
    <SignUpBuyer store ={store}/>
    </div>
  );
}

export default App;
