import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../actions/userAction";

const initialState = {
  success: false,
  message: null,
  pending: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.pending = false;
      state.error = false;
      state.success = true;
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.pending = true;
      state.error = false;
      state.success = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.error = true;
      state.pending = false;
      state.message =
        action.payload.message || "Tidak dapat menghubungi server";
      console.log(action);
      state.success = false;
    });
  },
});
export default userSlice.reducer;
