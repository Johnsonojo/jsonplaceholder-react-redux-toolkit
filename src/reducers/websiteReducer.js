const {
  GET_WEBSITES,
  // POST_WEBSITE,
  // GET_ONE_WEBSITE,
  // DELETE_WEBSITE,
  // UPDATE_WEBSITE,
  // GET_CATEGORY,
  // GET_TAGS,
} = require("../actions/types");

const initialState = { allWebsites: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEBSITES:
      return { ...state, allWebsites: action.payload };

    default:
      return state;
  }
};
