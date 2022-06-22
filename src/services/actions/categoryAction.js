import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../apis/categoryApi";
export const getCategories = createAsyncThunk("/categories/all", async () => {
  const response = await categoryApi.fetchAll();
  return response.data;
});
