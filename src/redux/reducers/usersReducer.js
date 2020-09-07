import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "./baseReducer";
import baseThunkMethod from "./baseThunkMethod";

export const getAllUsers = baseThunkMethod("getAllUsers");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: "idle",
    loaded: [],
    allUsers: [],
    userDetails: {},
    error: null,
  },
  extraReducers: {
    [getAllUsers.pending]: pending(),
    [getAllUsers.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = null;
        state.allUsers = [...state.allUsers, ...action.payload.data];
      }
      !state.loaded.includes("allUsers") && state.loaded.push("allUsers");
    },
    [getAllUsers.rejected]: rejected(),
  },
});

export default userSlice.reducer;
