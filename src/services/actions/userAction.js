import { createAsyncThunk } from "@reduxjs/toolkit";
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
