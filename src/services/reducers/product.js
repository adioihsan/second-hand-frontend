import { createSlice } from "@reduxjs/toolkit";
import {
  getMyProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  releaseProduct,
  unReleaseProduct,
  soldProduct,
  resetProductStatus,
  getProduct,
  checkIsProductNego,
} from "../actions/productAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  data: null,
  status: "idle",
  message: null,
  nego: null,
  checkNegoStatus: apiStatus.idle,
};

const defaultPending = (state, action) => {
  state.data = null;
  state.message = null;
  state.nego = null;
  state.status = "pending";
};
const defaultRejected = (state, action) => {
  state.pending = false;
  state.status = apiStatus.error;
  if (action.payload) {
    state.message = action.payload.message;
  }
};
const defaultFulfilled = (state, action) => {
  state.data = action.payload.data;
  state.message = action.payload.message;
  state.status = "success";
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
      defaultRejected(state, action);
    });
    //
    builder.addCase(getMyProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getMyProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getMyProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(updateProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(releaseProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(releaseProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(releaseProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(unReleaseProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(unReleaseProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(unReleaseProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(soldProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(soldProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(soldProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(resetProductStatus, (state, action) => {
      state.status = "idle";
      state.message = null;
    });
    //
    builder.addCase(getProduct.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getProduct.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(checkIsProductNego.fulfilled, (state, action) => {
      state.nego = action.payload.data;
      state.checkNegoStatus = apiStatus.success;
    });
    builder.addCase(checkIsProductNego.pending, (state, action) => {
      state.checkNegoStatus = apiStatus.pending;
    });
    builder.addCase(checkIsProductNego.rejected, (state, action) => {
      state.checkNegoStatus = apiStatus.rejected;
    });
  },
});

export default productSlice.reducer;
