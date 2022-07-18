import { createSlice } from "@reduxjs/toolkit";
import {
  getSellerNegoList,
  getBuyerNegoList,
} from "../actions/negotiationAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  data: null,
  status: apiStatus.idle,
  message: null,
  page: null,
  count: null,
  totalPage: null,
  nextPage: null,
  prevPage: null,
};

const defaultPending = (state, action) => {
  state.data = null;
  state.message = null;
  state.page = null;
  state.count = null;
  state.totalPage = null;
  state.nextPage = null;
  state.prevPage = null;
  state.status = apiStatus.pending;
};
const defaultRejected = (state, action) => {
  state.data = null;
  state.pending = false;
  state.page = null;
  state.count = null;
  state.totalPage = null;
  state.nextPage = null;
  state.prevPage = null;
  state.status = apiStatus.error;
  if (action.payload) {
    state.message = action.payload.message;
  }
};
const defaultFulfilled = (state, action) => {
  state.data = action.payload.data.rows;
  state.message = action.payload.message;
  state.count = action.payload.data.count;
  state.page = action.payload.data.page;
  state.totalPage = action.payload.data.totalPage;
  state.nextPage = action.payload.data.nextPage;
  state.prevPage = action.payload.data.prevPage;
  state.status = apiStatus.success;
};

const negotiationListSlice = createSlice({
  name: "negotiationList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSellerNegoList.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getSellerNegoList.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getSellerNegoList.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    builder.addCase(getBuyerNegoList.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getBuyerNegoList.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getBuyerNegoList.rejected, (state, action) => {
      defaultRejected(state, action);
    });
  },
});

export default negotiationListSlice.reducer;
