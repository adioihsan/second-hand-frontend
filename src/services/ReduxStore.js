import { configureStore } from "@reduxjs/toolkit";

import categoryList from "./reducers/categoryList";
const reducer = {
  categoryList,
};
const ReduxStore = configureStore({ reducer });
export default ReduxStore;
