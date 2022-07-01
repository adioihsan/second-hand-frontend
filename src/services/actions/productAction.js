import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../apis/productApi";

const defaultError = {
  message: "Tidak dapat terhubung ke server ",
};

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
      if (!error.response) return defaultError;
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
      if (!error.response) return defaultError;
      return rejectWithValue(error.response.data);
    }
  }
);
export const releaseProduct = createAsyncThunk(
  "product/me/release",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.releaseProduct({
        productId,
        authToken,
      });
      return response.data;
    } catch (error) {
      if (!error.response) return defaultError;
      return rejectWithValue(error.response.data);
    }
  }
);
export const unReleaseProduct = createAsyncThunk(
  "product/me/unrelease",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.unReleaseProduct({
        productId,
        authToken,
      });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const soldProduct = createAsyncThunk(
  "product/me/sold",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.soldProduct({ productId, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/me/delete",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.deleteProduct({ productId, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const getMyProductList = createAsyncThunk(
  "product/me/list",
  async (pageConfig, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await productApi.getMyProductList({
        pageConfig,
        authToken,
      });
      return response.data;
    } catch (error) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const setProductMessage = createAction("/product/message");
