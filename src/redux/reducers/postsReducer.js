import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "./baseReducer";
import baseThunkMethod from "./baseThunkMethod";

export const getAllPosts = baseThunkMethod("getAllPosts");

export const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: "idle",
    loaded: [],
    allPosts: [],
    error: null,
  },
  extraReducers: {
    [getAllPosts.pending]: pending(),
    [getAllPosts.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = null;
        state.allPosts = [...state.allPosts, ...action.payload.data];
      }
      !state.loaded.includes("allPosts") && state.loaded.push("allPosts");
    },
    [getAllPosts.rejected]: rejected(),
  },
});

export default postSlice.reducer;
