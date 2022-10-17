import axiosClient from "axios";

export const jsonPlaceholderShop = axiosClient.create({
  baseURL: process.env.REACT_APP_SHOP_ONLINE,
  timeout: 10000,
});

jsonPlaceholderShop.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/";
    }
  }
);

export default jsonPlaceholderShop;
