import { createStore, compose, applyMiddleware } from "redux";
import data from "./data/data";

const initialState = {};

const reducer = () => {
  return { products: data.products };
};

const store = createStore(reducer, initialState);

export default store;
