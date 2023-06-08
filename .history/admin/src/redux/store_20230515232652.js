/** @format */

// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listingsReducer from "./reducer";

const store = createStore(listingsReducer, applyMiddleware(thunk));

export default store;
