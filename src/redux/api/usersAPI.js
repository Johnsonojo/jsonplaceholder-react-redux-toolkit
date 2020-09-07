import baseApiMethod from "./baseApiMethod";

const usersAPI = {};

usersAPI.getUsers = () => baseApiMethod(null, "users", "get");

export default usersAPI;
