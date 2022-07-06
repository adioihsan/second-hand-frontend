import { createSlice } from "@reduxjs/toolkit";
import { postBuyerNego } from "../actions/negotiationAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  data: null,
  message: null,
  status: apiStatus.idle,
};

const defaultPending = (state, action) => {
  state.data = null;
  state.message = null;
  state.status = "pending";
};
const defaultRejected = (state, action) => {
  state.pending = false;
  state.status = "error";
  if (action.payload) {
    state.message = action.payload.message;
  }
};
const defaultFulfilled = (state, action) => {
  state.data = action.payload.data;
  state.message = action.payload.message;
  state.status = "success";
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
  },
});

export default negotiationSlice.reducer;
