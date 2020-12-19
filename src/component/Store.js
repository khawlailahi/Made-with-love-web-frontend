import { createStore } from 'redux'; 
import { combineReducers } from 'redux';



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
const allReducers = combineReducers({
    reducer,
    // addItem: reducerAddItem
    reducerBuyer
 })

var store = createStore(allReducers);

export default store;
