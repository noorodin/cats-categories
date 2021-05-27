import axios from "axios";

let instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.interceptors.request.use(function (req) {
  return req;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
