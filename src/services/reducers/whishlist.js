import { createSlice } from "@reduxjs/toolkit";
import { postWhishList } from "../actions/whishlistAction";

const initialState = {
  data: null,
  status: "idle",
  message: null,
  success: null,
};

const whistlistSlice = createSlice({
  name: "whistlist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postWhishList.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = "success";
      state.message = "wish telah ditambahkan";
      state.success = true;
    });
    builder.addCase(postWhishList.pending, (state, action) => {
      state.data = null;
      state.status = "pending";
      state.message = "masih pending";
      state.success = false;
    });
    builder.addCase(postWhishList.rejected, (state, action) => {
      state.status = "error";
      if (action.payload) {
        state.message = action.payload.message;
      }
      state.success = false;
      state.data = null;
    });
  },
});

export default whistlistSlice.reducer;
