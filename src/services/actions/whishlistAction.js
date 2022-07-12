import { createAsyncThunk } from "@reduxjs/toolkit";
import whishlistApi from "../apis/whishlistApi";
const defaultError = {
  message: "Tidak dapat terhubung ke server ",
};
export const postWhishList = createAsyncThunk(
  "/wish/post",
  async (data, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().user.token;
      const response = await whishlistApi.postWish({ data, authToken });
      return response.data;
    } catch (error) {
      if (!error.response) return defaultError;
      return rejectWithValue(error.response.data);
    }
  }
);
