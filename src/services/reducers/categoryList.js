import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categoryAction";
const initialState = {
  categories: [],
  pending: false,
  error: false,
  message: null,
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload.data;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getCategories.pending, (state, action) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
      if (action.payload) state.message = action.payload.message;
    });
  },
});
export default categoryListSlice.reducer;
