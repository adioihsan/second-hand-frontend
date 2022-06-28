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
export const getMyProduct = createAsyncThunk(
  "product/me/get",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.getMyProduct({ productId, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/me/update",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.updateProduct({ data, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const setProductMessage = createAction("/product/message");
