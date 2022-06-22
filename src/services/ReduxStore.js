import { configureStore } from "@reduxjs/toolkit";
import categoryList from "./reducers/categoryList";
import user from "./reducers/user";
const reducer = {
  categoryList,
  user,
};
const ReduxStore = configureStore({ reducer });
export default ReduxStore;
