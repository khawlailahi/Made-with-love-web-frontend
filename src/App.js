import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/aboutus";
import home from "./component/home.js";
import SignUpSeller from "./component/signUpSeller.js";
<<<<<<< HEAD
import listOfOrder from "./component/listOfOrder.js";
import Login from "./component/Login.js";
import ItemForm from "./component/addItem.js"
=======
import addItem from "./component/addItem.js";
// import Footer from "./component/Footer.js";
import listOfOrder from "./component/listOfOrder.js";
import Login from "./component/Login.js";
// import Navbar from "./component/layout/Navbar.js";
>>>>>>> 79fcb5d77bd63205ede57d91c50658805394cea8
import SignUpBuyer from "./component/signUpBuyer.js";
import "./Style/app.css";
import EditSellerProfile from "./component/editeSellerProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./component/Store.js";
import CatBuyer from "./component/categoryBuyer.js";
import Order from "./component/order.js";
import View from "./component/view.js";
import sellerProfile from "./component/sellerProfile";
import VisitSeller from "./component/VisitSeller";
import settingsProfile from "./component/settingBuyer.js"
import CategorySeller from "./component/categorySeller";
import ProtectedRoute from './component/protectedRoute'
import Notfound from './component/404page';





var mapStateToProps = (state) => {
  console.log(state, "staaaaat");
  return {
    name: state.catReducer.name,
  };
};
function App(props) {
  var url = `/buyer/${props.name}`
  console.log(url)
 
  return (
   <div className="page-container">
     <div className="content-wrap">
    <Router>
     <Switch>
     <Route
              path='/seller/profile/:id'
              exact
              component={sellerProfile}
            ></Route>
              <Route
              path='/seller/editProfile/:id'
              exact
              component={EditSellerProfile}
            ></Route>
            <ProtectedRoute path="/home" component ={home} />
            <ProtectedRoute path="/seller/visit/:id" exact component={VisitSeller}></ProtectedRoute>
       <Route  path ='/about' exact  component ={About}></Route>
       <Route path='/seller/editprofile/:id' exact
              component={editSellerProfile}
            ></Route>
       <Route  path ='/settings' exact  component ={settingsProfile}></Route>
       <Route  path ='/seller/addItem' exact  component ={ItemForm}></Route>
       <Route  path ='/login' exact  component ={Login}></Route>
       <Route  path ='/order' exact  component ={Order}></Route>
       <Route  path ='/404' exact  component ={Notfound}></Route>
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
