import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

<<<<<<< HEAD
import store from './component/Store.js'

=======

import store from './component/Store'
>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec

import {createStore} from 'redux';

// import rootReducer from './reducsers'
// const store = createStore(rootReducer)



<<<<<<< HEAD
=======

>>>>>>> aa8d58c429e932c37153c70a6f85208e89912dec
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
