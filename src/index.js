import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

<<<<<<< HEAD
import store from './component/Store.js'
=======
import store from './component/Store'

import {createStore} from 'redux';

// import rootReducer from './reducsers'
// const store = createStore(rootReducer)



>>>>>>> 8763a6f0c7dcc9a0cbba83ccac93cc2a699b5f08
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
