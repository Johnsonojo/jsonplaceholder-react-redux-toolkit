import { createSlice } from "@reduxjs/toolkit";
import faker from "faker";
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
        action.payload.data.forEach((element) => {
          element.pics = faker.internet.avatar();
        });

        state.allUsers = [...state.allUsers, ...action.payload.data];
      }
      !state.loaded.includes("allUsers") && state.loaded.push("allUsers");
    },
    [getAllUsers.rejected]: rejected(),
  },
});

export default userSlice.reducer;
