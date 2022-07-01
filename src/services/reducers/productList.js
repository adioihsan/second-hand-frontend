import { createSlice } from "@reduxjs/toolkit";
import { getMyProductList } from "../actions/productAction";

const initialState = {
  data: null,
  status: "idle",
  message: null,
  page: null,
  count: null,
  totalPage: null,
  nextPage: null,
  prevPage: null,
};

const defaultPending = (state, action) => {
  state.data = null;
  state.message = null;
  state.page = null;
  state.count = null;
  state.totalPage = null;
  state.nextPage = null;
  state.prevPage = null;
  state.status = "pending";
};
const defaultRejected = (state, action) => {
  state.data = null;
  state.pending = false;
  state.page = null;
  state.count = null;
  state.totalPage = null;
  state.nextPage = null;
  state.prevPage = null;
  state.status = "error";
  if (action.payload) {
    state.message = action.payload.message;
  }
};
const defaultFulfilled = (state, action) => {
  state.data = action.payload.data.rows;
  state.message = action.payload.message;
  state.count = action.payload.data.count;
  state.page = action.payload.data.page;
  state.totalPage = action.payload.data.totalPage;
  state.nextPage = action.payload.data.nextPage;
  state.prevPage = action.payload.data.prevPage;
  state.status = "success";
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMyProductList.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getMyProductList.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getMyProductList.rejected, (state, action) => {
      defaultRejected(state, action);
    });
  },
});
export default productListSlice.reducer;
