import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../apis/categoryApi";
export const getCategories = createAsyncThunk(
  "/categories/all",
  async (data, { rejectWithValue }) => {
    try {
      const response = await categoryApi.fetchAll();
      return response.data;
    } catch (error) {
      if (!error.response.data) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
