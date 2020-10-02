import { createStore, applyMiddleware } from "redux";
import AppReducer from "./AppReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(AppReducer, composeWithDevTools(applyMiddleware()));

export default store;
