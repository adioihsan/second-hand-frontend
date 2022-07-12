import { configureStore } from "@reduxjs/toolkit";
import categoryList from "./reducers/categoryList";
import user from "./reducers/user";
import product from "./reducers/product";
import productList from "./reducers/productList";
<<<<<<< HEAD
import whishlist from "./reducers/whishlist";
=======
import negotiation from "./reducers/negotiation";
>>>>>>> 5026fd4cd08683227adfc0a6e7529201ad6c62fe
const reducer = {
  categoryList,
  user,
  product,
  productList,
<<<<<<< HEAD
  whishlist,
=======
  negotiation,
>>>>>>> 5026fd4cd08683227adfc0a6e7529201ad6c62fe
};
const ReduxStore = configureStore({ reducer });
export default ReduxStore;
