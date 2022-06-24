import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../actions/productApi";
import { setUserMessage } from "../actions/userAction";

const initialState = {
  data: null,
  pending: false,
  error: false,
  success: true,
  message: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.pending = false;
      state.error = false;
      state.success = action.payload.success;
    });
    builder.addCase(createProduct.pending, (state, action) => {
      state.data = null;
      state.message = null;
      state.pending = true;
      state.error = false;
      state.success = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.data = null;
      state.pending = false;
      state.error = true;
      state.success = false;
      if (action.payload) {
        state.success = action.payload.success;
        state.message = action.payload.message;
      }
    });
    //
    builder.addCase(setUserMessage, (state, action) => {
      state.message = action.payload.message;
      state.error = action.payload.error;
    });
  },
});

export default productSlice.reducer;
