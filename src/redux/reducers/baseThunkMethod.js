import { createAsyncThunk } from "@reduxjs/toolkit";
import handleApiError from "../api/handleApiError";
import usersAPI from "../api/usersAPI";
import postsAPI from "../api/postsAPI";

const Api = {
  getAllUsers: usersAPI.getUsers,
  getAllPosts: postsAPI.getPosts,
};

const baseThunkMethod = (actionName) =>
  createAsyncThunk(actionName, async (data, { rejectWithValue }) => {
    try {
      const response = await Api[actionName](data);
      if (response.status !== 200) {
        const errorMsg = handleApiError(response, response.status);
        throw errorMsg;
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  });

export default baseThunkMethod;
