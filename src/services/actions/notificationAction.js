import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import notificationApi from "../apis/notificationApi";

export const getAllNotifications = createAsyncThunk(
  "/notifications/get/all",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await notificationApi.getAllNotifications(authToken);
      return response.data;
    } catch (error) {}
  }
);

export const deleteNotificationAll = createAsyncThunk(
  "notifications/delete",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await notificationApi.deleteNotificationAll(authToken);
      return response.data;
    } catch (error) {}
  }
);
export const setNotifBell = createAction("/notification/bell/on");
