import { createStore ,applyMiddleware} from 'redux'; 
import { combineReducers } from 'redux';
import thunk from "redux-thunk";

import {combineForms, createForms} from 'react-redux-form';
  
var signUpSeller = {
    email :"",
    password : "",
    storeName : "",
    category : "",
    description : "",
    location : "",
    deliveryOrder : "",
    image:""
   };
   
   var signUpBuyer = {
       email:"",
       password:"",
       userName:"",
       location:"",
       phoneNumber:""
   } 
   
var loginState={
    email:"",
    password:""
}

var category = {
    name:""
}

var reducerBuyer = (state =signUpBuyer, action) =>{
    switch (action.type) {
        case 'INPUT_BUYER':
            var obj = {}
            obj[action.name]= action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj) 
          
    
        default:
           return state;
    }
}
//  var fetchUsersRequest = () => {
//     return {
//       type: FETCH_USERS_REQUEST,
//       payload: []
//     }
//   }

var reducer = (state = signUpSeller, action) =>{
    // console.log('reducer', state);
    switch (action.type) {
        case 'INPUT_CANGE':
            //console.log("object", Object.assign( {},state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text}))
            // var x = action.name; 
            var obj = {}
            obj[action.name]= action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj)
            
    
        default:
            return state;
    }
    
}

var catReducer = (state = category,action) => {
    console.log(action)
    switch (action.type){
        case 'food_category':
         
            // console.log("objj",obj)
            category = Object.assign({}, state, {name:'food'})
            console.log(state,'state')
            console.log('cat', category)

            return Object.assign({}, state, {name:'food'})
            
         case 'clothes_category':
            category = Object.assign({}, state, {name:'clothes'})
            console.log(state,'state')
            console.log('cat', category)

            return Object.assign({}, state, {name:'clothes'})
            case 'babyshower_category':
                category = Object.assign({}, state, {name:'babyproducts'})
                console.log(state,'state')
                console.log('cat', category)
  
                return Object.assign({}, state, {name:'babyproducts'})   
            case 'accesories_category':
            category = Object.assign({}, state, {name:'accessories'})
            console.log(state,'state')
            console.log('cat', category)

            return Object.assign({}, state, {name:'accessories'})
        default:
            return category;
    }
    
}


// const allReducers = combineReducers({
//     reducer,
//     // addItem: reducerAddItem
//     reducerBuyer,
//     catReducer

//  })
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
    reducer :reducer,
    addItem: reducerAddItem,
<<<<<<< HEAD
    reducerBuyer:reducerBuyer
 , 
=======
    reducerBuyer:reducerBuyer,
    catReducer: catReducer
 ,
>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec
    ...createForms({
        user: initialState,
        login:loginState,
        order:orderForm

     } )
    } )


    );
export default store;