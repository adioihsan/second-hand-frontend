import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userApi from "../apis/userApi";
export const createUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await userApi.authRegister(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const authUser = createAsyncThunk(
  "/user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await userApi.authLogin(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const setUserToken = createAction("user/token");
export const setUserData = createAction("/user/data");
export const setUserMessage = createAction("/user/message");
