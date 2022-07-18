import { createSlice } from "@reduxjs/toolkit";
import { getAllNotifications } from "../actions/notificationAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  status: apiStatus.idle,
  data: [],
  count: null,
  limit: null,
  nextPage: null,
  page: null,
  prevPage: null,
};

const notificationListSlice = createSlice({
  name: "notificationList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllNotifications.fulfilled, (state, action) => {
      const result = action.payload.data;
      state.data = result.rows.reverse();
      state.count = result.count;
      state.limit = result.limit;
      state.nextPage = result.nextPage;
      state.page = result.page;
      state.prevPage = result.prevPage;
      state.status = apiStatus.success;
    });
    builder.addCase(getAllNotifications.pending, (state, action) => {
      state.status = apiStatus.pending;
    });
    builder.addCase(getAllNotifications.rejected, (state, action) => {
      state.status = apiStatus.error;
    });
  },
});

export default notificationListSlice.reducer;
