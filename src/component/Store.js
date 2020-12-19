import { createStore } from 'redux'; 
import { combineReducers } from 'redux';
var theState = {
 email :"",
 password : "",
 storeName : "",
 category : "",
 description : "",
 location : "",
 deliveryOrder : ""
};


var pageCategory={
    category:''
}

var reducer = (state = theState, action) =>{
    console.log('reducer', state);
    switch (action.type) {
        case 'INPUT_CANGE':
            //console.log("object", Object.assign( {},state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text}))
            return Object.assign({}, state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text})
        default:
            return state;
    }
}

//reducer for page category
//  var pageCat =(state=pageCategory, action)=>{
//      switch(action.type){
//          case 'pageCategory' :
//          return  Object.assign({}, state, {category:action.text})
//      }
//  }

const allReducers = combineReducers({
    signUp :reducer,
    // addItem: reducerAddItem,
    // pageCat:pageCat
})


var store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
