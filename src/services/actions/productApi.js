import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../apis/productApi";

export const createProduct = createAsyncThunk(
  "/product/create",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.createProduct({ data, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const setProductMessage = createAction("/product/message");
