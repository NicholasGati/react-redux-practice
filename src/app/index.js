import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

import App from "./containers/App";

// set your initial state
const initialState = {
  result: 1,
  lastValues: []
}

// Math reducer
const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state, // ES6 way of getting all properties of what is after ...
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    case "SUBTRACT":
    state = {
      ...state, // ES6 way of getting all properties of what is after ...
      result: state.result - action.payload,
      lastValues: [...state.lastValues, action.payload]
    }
      break;
  }
  return state;
}

// User reducer
const userReducer = (state = {
  name: "Nick", age: 28
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state, // ES6 way of getting all properties of what is after ...
        name: action.payload
      }
      break;
    case "SET_AGE":
    state = {
      ...state, // ES6 way of getting all properties of what is after ...
      age: action.payload
    }
      break;
  }
  return state;
}

// create a logger middleware
// redux expects this weird looking pattern of many fat arrow functions in a row
// this is just for example, we are using a 3rd party logger
const myLogger = (store) => (next) => (action) => {
  console.log("Logged action: ", action);
  next(action);
}

// combine multiple reducers
//////////////////////////|-----------------------combine reducers----------------------------|-state-|----pass middleware----|
const store = createStore(
  combineReducers({mathReducer: mathReducer, userReducer: userReducer}),
  {}, // state
  applyMiddleware(logger())
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById("app")
);
