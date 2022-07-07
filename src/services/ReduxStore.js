import { configureStore } from "@reduxjs/toolkit";
import categoryList from "./reducers/categoryList";
import user from "./reducers/user";
import product from "./reducers/product";
import productList from "./reducers/productList";
import whishlist from "./reducers/whishlist";
const reducer = {
  categoryList,
  user,
  product,
  productList,
  whishlist,
};
const ReduxStore = configureStore({ reducer });
export default ReduxStore;
