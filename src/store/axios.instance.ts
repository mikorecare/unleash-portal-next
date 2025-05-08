import axios from "axios";
import { store } from "./store";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = (store.getState() as any).Auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    const errorMessage = error?.response?.data?.m || "Something went wrong. Please try again.";
    const statusCode = error?.response?.data?.c || undefined;
    store.dispatch({
      type: 'SET_ERROR',
      payload: {
        title: "Something Went Wrong",
        subtitle: errorMessage,
        signInErrorStatus: true,
        statusCode: statusCode
      }
    });

    return Promise.reject(error);
  }
);

export default axiosInstance;