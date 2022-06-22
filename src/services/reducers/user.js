import { createSlice } from "@reduxjs/toolkit";
import { authUser, createUser, setUserToken } from "../actions/userAction";

const initialState = {
  success: false,
  message: null,
  pending: false,
  error: false,
  token: null,
  user: {},
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
      state.message = action.payload
        ? action.payload.message
        : "Tidak dapat menghubungi server";
      state.success = false;
    });
    //
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.token = action.payload.data.token;
      state.pending = false;
      state.error = false;
      state.success = true;
    });
    builder.addCase(authUser.pending, (state, action) => {
      state.token = null;
      state.pending = true;
      state.error = false;
      state.success = false;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.token = null;
      state.error = true;
      state.pending = false;
      state.message = action.payload
        ? action.payload.message
        : "Tidak dapat menghubungi server";
      state.success = false;
    });
    //
    builder.addCase(setUserToken, (state, action) => {
      state.token = action.payload;
    });
  },
});
export default userSlice.reducer;
