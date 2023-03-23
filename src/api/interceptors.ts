import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import store from "../redux/store";
import { showSpinner, clearSpinner, hideSpinner } from "../redux/global";

interface IRequestAxios extends InternalAxiosRequestConfig {
  skipLoading?: boolean;
}

const onRequestConfig = (config: IRequestAxios) => {
  if (!config.headers["Authorization"]) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }
  config.timeout = 30000;
  !config.skipLoading && store.dispatch(showSpinner());
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  store.dispatch(clearSpinner());
  return Promise.reject(error);
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  store.dispatch(hideSpinner());
  return res;
};

const onResponseError = async (
  err: AxiosError,
  axiosInstance: AxiosInstance
): Promise<AxiosError | undefined> => {
  const originalConfig = err.config as InternalAxiosRequestConfig;
  store.dispatch(clearSpinner());

  return Promise.reject(err?.response?.data);
};

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequestConfig, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, (err: AxiosError) =>
    onResponseError(err, axiosInstance)
  );
};
