import { createSlice } from "@reduxjs/toolkit";
import {
  authUser,
  createUser,
  getUserDetail,
  getUserProflie,
  setUserProfile,
  setUserToken,
  setUserMessage,
  updateUserDetail,
} from "../actions/userAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  message: null,
  status: apiStatus.idle,
  token: null,
  userProfile: null,
  userDetail: null,
};

const defaultFulfilled = (state, action) => {
  state.message = action.payload.message;
  state.status = apiStatus.success;
};
const defaultRejected = (state, action) => {
  state.status = apiStatus.error;
  state.message = action.payload
    ? action.payload.message
    : "Tidak dapat menghubungi server";
};
const defaultPending = (state, action) => {
  state.status = apiStatus.pending;
  state.message = null;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(createUser.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.token = action.payload.data.token;
      defaultFulfilled(state, action);
    });
    builder.addCase(authUser.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(authUser.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(setUserToken, (state, action) => {
      state.token = action.payload;
    });
    //
    builder.addCase(setUserProfile, (state, action) => {
      state.userProfile = action.payload;
    });
    //
    builder.addCase(setUserMessage, (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
    });
    //
    builder.addCase(getUserProflie.fulfilled, (state, action) => {
      state.userProfile = action.payload.data;
    });
    builder.addCase(getUserProflie.pending, (state, action) => {
      state.userProfile = null;
      defaultPending(state, action);
    });
    builder.addCase(getUserProflie.rejected, (state, action) => {
      state.userProfile = null;
      defaultRejected(state, action);
    });
    //
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload.data;
      const userDetail = state.userDetail;
      state.userProfile = {
        ...state.userProfile,
        name: userDetail.name,
        photo: userDetail.image,
      };
      defaultFulfilled(state, action);
    });
    builder.addCase(getUserDetail.pending, (state, action) => {
      state.userDetail = null;
      defaultPending(state, action);
    });
    builder.addCase(getUserDetail.rejected, (state, action) => {
      state.userDetail = null;
      defaultRejected(state, action);
    });
    //
    builder.addCase(updateUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload.data;
      const userDetail = action.payload.data;
      state.userProfile = {
        ...state.userProfile,
        name: userDetail.name,
        photo: userDetail.image,
      };
      defaultFulfilled(state, action);
    });
    builder.addCase(updateUserDetail.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(updateUserDetail.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
  },
});
export default userSlice.reducer;
