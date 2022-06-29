import { createSlice } from "@reduxjs/toolkit";
import {
  getMyProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  releaseProduct,
  unReleaseProduct,
  soldProduct,
} from "../actions/productAction";
import { setUserMessage } from "../actions/userAction";

const initialState = {
  data: null,
  success: true,
  pending: false,
  error: false,
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
  state.success = true;
  state.pending = false;
  state.error = false;
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
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
    builder.addCase(releaseProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(releaseProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(releaseProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
    builder.addCase(unReleaseProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(unReleaseProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(unReleaseProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
    builder.addCase(soldProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(soldProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(soldProduct.rejected, (state, action) => {
      defaultError(state, action);
    });
    //
  },
});

export default productSlice.reducer;
