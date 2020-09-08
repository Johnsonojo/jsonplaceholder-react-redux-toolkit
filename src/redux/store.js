import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import usersReducer from "./reducers/usersReducer";
import postsReducer from "./reducers/postsReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: usersReducer,
    post: postsReducer,
  },
});
