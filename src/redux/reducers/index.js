import { combineReducers } from "redux";
import Product from "./product";
import Cart from "./cart";
import Message from "./message";

const appReducers = combineReducers({
  Product,
  Cart,
  Message,
});

export default appReducers;
