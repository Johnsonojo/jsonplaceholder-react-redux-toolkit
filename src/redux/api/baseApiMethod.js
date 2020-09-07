import axios from "axios";

const baseApiMethod = async (data, url, method, contentType) => {
  const extras = {};

  if (method !== "get") {
    if (!contentType) {
      extras.headers = {
        ...extras.headers,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      extras.body = JSON.stringify(data);
      extras.method = method;
    } else {
      extras.method = method;
      extras.body = data;
    }
  }

  try {
    const response = await axios(
      `${process.env.REACT_APP_BASE_API_URL}/${url}`,
      extras
    );
    return response;
  } catch (error) {
    return "Something went wrong";
  }
};

export default baseApiMethod;
