import axios, { Axios, AxiosError } from "axios";
import { CONST_ACCESS_TOKEN } from "../../contants/defaultValues";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

function initiateInterceptors(instance: Axios) {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(CONST_ACCESS_TOKEN);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error: AxiosError) => {
      if (error.response) {
        const status = error.response.status;
          console.log(error.response);
          
        if (status === 401) {
          alert("Unauthorized - redirect to login");
        } else if (status === 500) {
          alert(error.response.data?.message);
        }
      } else if (error.request) {
        alert("No response from server");
      } else {
        alert("Request setup error:", error.message);
      }

      return Promise.reject(error);
    },
  );

  return instance;
}

initiateInterceptors(axiosClient);

export default axiosClient;
