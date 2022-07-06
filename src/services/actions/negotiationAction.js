import { createAsyncThunk } from "@reduxjs/toolkit";
import negotiationApi from "../apis/negotiationApi";

const defaultError = {
  message: "Tidak dapat terhubung ke server ",
};

export const postBuyerNego = createAsyncThunk(
  "negotiation/buyer/post",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await negotiationApi.postBuyerNego({ data, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) return defaultError;
      return rejectWithValue(error.response.data);
    }
  }
);
export const getSellerNegoList = createAsyncThunk(
  "negotiation/seller/list",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await negotiationApi.getSellerNegoList({
        data,
        authToken,
      });
      return response.data;
    } catch (error) {
      if (!error.response) return defaultError;
      return rejectWithValue(error.response.data);
    }
  }
);
