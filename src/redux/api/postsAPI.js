import baseApiMethod from "./baseApiMethod";

const postsAPI = {};

postsAPI.getPosts = () => baseApiMethod(null, "posts", "get");

export default postsAPI;
