import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;
const getToken = JSON.parse(localStorage["token"]);


const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const login = (data) => {
  return axiosRequest("POST", "/auth/login", data);
};

export const logout = (token) => {
  return axios({
    method: "DELETE",
    url: `${baseUrl}/auth/logout`,
    headers: { "x-access-token": token },
  });
};

export const reset = (data) => {
  return axiosRequest("POST", "/auth/reset", data);
};

export const register = (body) => {
  return axiosRequest("POST", "/users/register", body);
};

export const getProfile = (token) => {
  return axios({
    method: "GET",
    url: `${baseUrl}/users/profile`,
    headers: { "x-access-token": token },
  })
}

export const patchProfile = (data) => {
  return axios({
    method: "PATCH",
    url: `${baseUrl}/users/profile/edit`,
    headers: {
      "x-access-token": getToken,
      "Content-Type": "multipart/form-data",
    },
    data,
  })
}

export const getProduct = (data) => {
  return axiosRequest("GET", "/products", data);
};
