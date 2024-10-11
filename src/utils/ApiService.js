import axios from "axios";
import { toast } from "sonner";

export const BASE_URL = import.meta.env.VITE_API_URL;

export const apiPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response?.data) {
      const data = error.response.data;
      toast.error(data.message);
    } else {
      toast.error(error.message);
    }

    return Promise.reject(error);
  },
);

export const apiAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
