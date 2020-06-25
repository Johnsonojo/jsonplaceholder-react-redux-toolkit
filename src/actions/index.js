// import { formValues } from "redux-form";
import websiteApi from "../apis/websites";
// import history from "../history";
const {
  POST_WEBSITE,
  GET_WEBSITES,
  // GET_ONE_WEBSITE,
  // DELETE_WEBSITE,
  // UPDATE_WEBSITE,
  // GET_CATEGORY,
  // GET_TAGS,
} = require("./types");

export const addWebsite = (formValues) => async (dispatch) => {
  const response = await websiteApi.post("/websites", { ...formValues });
  dispatch({
    type: POST_WEBSITE,
    payload: response.data,
  });
  // history.push("/");
};

export const getAllWebsite = () => async (dispatch) => {
  const response = await websiteApi.get("/websites");
  // console.log(response.data);
  dispatch({
    type: GET_WEBSITES,
    payload: response.data,
  });
};
