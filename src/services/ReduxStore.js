import { configureStore } from "@reduxjs/toolkit";
import categoryList from "./reducers/categoryList";
import user from "./reducers/user";
import product from "./reducers/product";
const reducer = {
  categoryList,
  user,
  product,
};
const ReduxStore = configureStore({ reducer });
export default ReduxStore;
