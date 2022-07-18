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
