import { createSlice } from "@reduxjs/toolkit";
import {
  getMyProduct,
  createProduct,
  updateProduct,
} from "../actions/productAction";
import { setUserMessage } from "../actions/userAction";

const initialState = {
  data: null,
  pending: false,
  error: false,
  success: true,
  message: null,
};

const defaultPending = (state, action) => {
  state.data = null;
  state.message = null;
  state.pending = true;
  state.error = false;
  state.success = false;
};
const defaultError = (state, action) => {
  state.data = null;
  state.pending = false;
  state.error = true;
  state.success = false;
  state.success = false;
  if (action.payload) {
    state.message = action.payload.message;
  }
};
const defaultFulfilled = (state, action) => {
  state.data = action.payload.data;
  state.message = action.payload.message;
  state.pending = false;
  state.error = false;
  state.success = action.payload.success;
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(createProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
    builder.addCase(getMyProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getMyProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getMyProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(updateProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
  },
});

export default productSlice.reducer;
