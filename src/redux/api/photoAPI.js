import baseApiMethod from "./baseApiMethod";

const photosAPI = {};

photosAPI.getPhotos = () => baseApiMethod(null, "photos", "get");

export default photosAPI;
