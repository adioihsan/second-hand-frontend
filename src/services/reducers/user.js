import { createSlice } from "@reduxjs/toolkit";
import {
  authUser,
  createUser,
  readUserDetail,
  setUserData,
  setUserMessage,
  setUserToken,
  updateUserDetail,
} from "../actions/userAction";

const initialState = {
  success: false,
  message: null,
  pending: false,
  error: false,
  token: null,
  userData: null,
  userDetail: null,
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
      state.message = null;
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
      state.message = null;
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
    //
    builder.addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
    //
    builder.addCase(setUserMessage, (state, action) => {
      state.message = action.payload.message;
      state.error = action.payload.error;
    });
    //
    builder.addCase(readUserDetail.fulfilled, (state, action) => {
      const dataResult = action.payload.data;
      state.message = action.payload.message;
      state.userDetail = action.payload.data;
      state.pending = false;
      state.error = false;
      state.success = true;
      // harom
      state.userData = {
        id: dataResult.id,
        name: dataResult.name,
        photo: dataResult.image,
      };
    });
    builder.addCase(readUserDetail.pending, (state, action) => {
      state.userDetail = null;
      state.pending = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(readUserDetail.rejected, (state, action) => {
      state.userDetail = null;
      state.error = true;
      state.pending = false;
      state.message = action.payload
        ? action.payload.message
        : "Tidak dapat menghubungi server";
      state.success = false;
    });
    //
    builder.addCase(updateUserDetail.fulfilled, (state, action) => {
      const dataResult = action.payload.data;
      state.message = action.payload.message;
      state.userDetail = action.payload.data;
      state.pending = false;
      state.error = false;
      state.success = true;
      // harom
      state.userData = {
        id: dataResult.id,
        name: dataResult.name,
        photo: dataResult.image,
      };
    });
    builder.addCase(updateUserDetail.pending, (state, action) => {
      state.pending = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(updateUserDetail.rejected, (state, action) => {
      state.error = true;
      state.pending = false;
      state.success = false;
      state.message = action.payload
        ? action.payload.message
        : "Tidak dapat menghubungi server";
    });
  },
});
export default userSlice.reducer;
