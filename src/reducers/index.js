import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import websiteReducer from "../reducers/websiteReducer";

export default combineReducers({
  form: formReducer,
  websites: websiteReducer,
});
