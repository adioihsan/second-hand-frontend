import { createSlice } from "@reduxjs/toolkit";
import {
  deleteNotification,
  deleteNotificationAll,
  getAllNotifications,
  setNotifBell,
} from "../actions/notificationAction";
import apiStatus from "../utils/apiStatus";

const initialState = {
  status: apiStatus.idle,
  data: [],
  count: null,
  limit: null,
  nextPage: null,
  page: null,
  prevPage: null,
  isBell: false,
};

const notificationListSlice = createSlice({
  name: "notificationList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllNotifications.fulfilled, (state, action) => {
      const result = action.payload.data;
      state.data = result.rows;
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
    builder.addCase(deleteNotificationAll.fulfilled, (state, action) => {
      state.status = apiStatus.success;
      state.data = [];
    });
    builder.addCase(deleteNotificationAll.pending, (state, action) => {
      state.status = apiStatus.pending;
    });
    builder.addCase(deleteNotificationAll.rejected, (state, action) => {
      state.status = apiStatus.error;
    });
    builder.addCase(setNotifBell, (state, action) => {
      state.isBell = action.payload;
    });
  },
});

export default notificationListSlice.reducer;
