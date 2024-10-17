import axios from "axios";
import { toast } from "sonner";
import AuthService from "./AuthService";

export const BASE_URL = import.meta.env.VITE_API_URL;
export const BASE_URL_IMAGE = import.meta.env.VITE_API_IMG_URL;

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

apiAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
  return config;
});

apiAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    if (error.response?.status === 401) {
      AuthService.logout();
      window.location.href = "/";
    } else if (error.response?.status === 413) {
      toast.error(
        "Request terlalu besar. Silakan coba lagi dengan ukuran yang lebih kecil.",
      );
    } else if (error.response?.data) {
      const data = error.response?.data;
      if (data.message === "V.ERR") {
        // validation error
        toast.error(readableErrors(data.errors));
      } else {
        toast.error(data.message);
      }
    } else {
      toast.error(error.message);
    }
    return Promise.reject(error);
  },
);

function readableErrors(errors) {
  if (errors) {
    const errorsArray = [];
    for (let error in errors) {
      errorsArray.push(errors[error]);
    }
    return errorsArray.join(", ");
  } else {
    return `Tidak diketahui. silakan cek Console Logs untuk melihat detail selengkapnya.`;
  }
}
