import React from 'react';
import ReactDOM from 'react-dom';
import LoginReducer from './reducers/LoginReducer';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'


const a:any  = window;

const composeEnhancer = a['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const rootReducer = combineReducers({
  LoginReducer
  // insert your reducers here
})

export let store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>    
  </>,
  document.getElementById('root')
)

reportWebVitals();