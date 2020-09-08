import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "./baseReducer";
import baseThunkMethod from "./baseThunkMethod";

export const getAllPhotos = baseThunkMethod("getAllPhotos");

export const photoSlice = createSlice({
  name: "photo",
  initialState: {
    loading: "idle",
    loaded: [],
    allPhotos: [],
    error: null,
  },
  extraReducers: {
    [getAllPhotos.pending]: pending(),
    [getAllPhotos.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = null;
        const slicePhotoArray = action.payload.data.slice(0, 401);
        // action.payload.data.forEach((element) => {
        //   element.pics = faker.internet.avatar();
        // });

        state.allPhotos = [...state.allPhotos, ...slicePhotoArray];
      }
      !state.loaded.includes("allPhotos") && state.loaded.push("allPhotos");
    },
    [getAllPhotos.rejected]: rejected(),
  },
});

export default photoSlice.reducer;
