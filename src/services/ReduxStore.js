import { configureStore } from "@reduxjs/toolkit";
import categoryList from "./reducers/categoryList";
import user from "./reducers/user";
import product from "./reducers/product";
import productList from "./reducers/productList";
import negotiation from "./reducers/negotiation";
const reducer = {
  categoryList,
  user,
  product,
  productList,
  negotiation,
};
const ReduxStore = configureStore({ reducer });
export default ReduxStore;
