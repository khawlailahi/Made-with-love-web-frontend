import { createStore ,applyMiddleware} from 'redux'; 
import { combineReducers } from 'redux';
import {combineForms, createForms} from 'react-redux-form';
  
var theState = {
 email :"",
 password : "",
 storeName : "",
 category : "",
 description : "",
 location : "",
 deliveryOrder : ""
};

var loginState={
    email:"",
    password:""
}


var reducer = (state = theState, action) =>{
    console.log('reducer', action.text);
    switch (action.type) {
        case 'INPUT_CANGE':
            // console.log("object", Object.assign( {},state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text}))
            return Object.assign({}, state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text})
        default:
            return state;
    }
}
var initialState ={
    product: "" ,
    description:"",
    price:"",
    image:""
}
var orderForm={
    quantity:"",
    location:"",
    phoneNumber:""
}


var reducerAddItem =(state = initialState ,action) =>{
    switch(action.type){
        case 'ADD_ITEM':
      return Object.assign({}, state,{product :action.product}, { description:action.description}, { price:action.price},{ image:action.image})
      default:
          return state

    }
}





// const allReducers = 
const store = createStore(combineReducers({
    signUp :reducer,
    addItem: reducerAddItem
 ,
    ...createForms({
        user: initialState,
        login:loginState,
        order:orderForm

      })})


    );
export default store;