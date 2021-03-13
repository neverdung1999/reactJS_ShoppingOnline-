import { combineReducers } from "redux";
import Product from "./product";
import Cart from "./cart";

const appReducers = combineReducers({
  Product,
  Cart,
});

export default appReducers;
