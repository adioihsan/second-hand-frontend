import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import {
  acceptNego,
  doneNego,
  getNego,
  postBuyerNego,
  rejectNego,
} from "../actions/negotiationAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  data: null,
  message: null,
  buyer: null,
  status: apiStatus.idle,
};

const defaultPending = (state, action) => {
  state.message = null;
  state.status = apiStatus.pending;
};
const defaultRejected = (state, action) => {
  state.status = apiStatus.error;
  if (action.payload) {
    state.message = action.payload.message;
  }
};
const defaultFulfilled = (state, action) => {
  state.data = action.payload.data;
  if (action.payload.data.user_buyer !== undefined)
    state.buyer = action.payload.data.user_buyer;
  state.message = action.payload.message;
  state.status = apiStatus.success;
};

const negotiationSlice = createSlice({
  name: "negotiation",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postBuyerNego.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(postBuyerNego.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(postBuyerNego.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(acceptNego.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(acceptNego.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(acceptNego.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(rejectNego.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(rejectNego.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(rejectNego.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(doneNego.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(doneNego.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(doneNego.rejected, (state, action) => {
      defaultRejected(state, action);
    });
    //
    builder.addCase(getNego.pending, (state, action) => {
      defaultPending(state, action);
    });
    builder.addCase(getNego.fulfilled, (state, action) => {
      defaultFulfilled(state, action);
    });
    builder.addCase(getNego.rejected, (state, action) => {
      defaultRejected(state, action);
    });
  },
});

export default negotiationSlice.reducer;
