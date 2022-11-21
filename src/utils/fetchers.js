import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
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
  });
};

export const patchProfile = (data, token) => {
  return axios({
    method: "PATCH",
    url: `${baseUrl}/users/profile/edit`,
    headers: {
      "x-access-token": token,
      "Content-Type": "multipart/form-data",
    },
    data,
  });
};

export const getProduct = (params, data) => {
  return axiosRequest("GET", "/products", data, params);
};

export const getCategories = (data) => {
  return axiosRequest("GET", "/categories", data);
};

export const getBrands = (data) => {
  return axiosRequest("GET", "/brands", data);
};

export const getProductSeller = (token, params) => {
  return axios({
    method: "GET",
    url: `${baseUrl}/products/seller`,
    headers: { "x-access-token": token },
    params,
  });
};
