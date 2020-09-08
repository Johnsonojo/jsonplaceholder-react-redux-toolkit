import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import photoReducer from "./reducers/photoReducer";
import postsReducer from "./reducers/postsReducer";
import usersReducer from "./reducers/usersReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: usersReducer,
    post: postsReducer,
    photo: photoReducer,
  },
});
