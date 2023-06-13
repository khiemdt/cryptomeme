import { data } from "autoprefixer";
import axios from "axios";
import { getCookie, removeCookies, setCookie } from "cookies-next";
import { v4 as uuidv4 } from "uuid";
import { API_URL, CLIENT_ID } from "../constants/constants";
import { actionRefreshToken } from "./account";

interface RequestProps {
  method: "get" | "post" | "put" | "delete";
  url?: string;
  data?: any;
  headers?: any;
  [propsName: string]: any;
}
let isRefreshing = false;
let subscribers: Array<any> = [];

function addSubscriber(callback: any) {
  subscribers.push(callback);
}

function onRrefreshed(new_token: any) {
  subscribers = subscribers.map((callback) => callback(new_token));
  subscribers = [];
}
const request = axios.create({
  baseURL: API_URL,
  timeout: 40000,
});
const logout = () => {
  subscribers = [];
  removeCookies("token");
  removeCookies("refresh-token");
  if (typeof window !== "undefined") window.location.href = "/";
};

request.interceptors.request.use(
  (config: any) => {
    if (
      config.url.indexOf("/login") !== -1 ||
      config.url.indexOf("/refresh-token") !== -1
    ) {
      delete config.headers.Authorization;
    }
    return { ...config, headers: { ...config?.headers } };
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response && error?.response?.status === 401) {
      const refreshToken = getCookie("refresh-token");
      if (error.config.url.indexOf("refresh-token") !== -1) {
        logout();
      }
      if (refreshToken && !originalRequest._retry) {
        originalRequest._retry = true;
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const res = await actionRefreshToken({
              clientId: CLIENT_ID,
              grantType: "refresh_token",
              userType: "TEACHER",
              token: refreshToken,
            });
            const { data } = res.data;
            isRefreshing = false;
            setCookie("token", data?.accessToken);
            setCookie("refresh-token", data?.refreshToken);
            onRrefreshed(data.accessToken);
            return new Promise((resolve) => {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + data.accessToken;
              originalRequest.headers["Authorization"] =
                "Bearer " + data.accessToken;
              resolve(axios(originalRequest));
            });
          } catch (error) {
            logout();
          }
        }
        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((new_token: any) => {
            originalRequest.headers.Authorization = `Bearer ${new_token}`;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest;
      } else {
        logout();
      }
    }
    return Promise.reject(error.response);
  }
);

const api = (options: RequestProps) => {
  const token = getCookie("token");
  const uuid = getCookie("uuid");
  let headers = {
    "Accept-Language": "vi",
    "m-platform": "WEB",
    tcode: "cfm",
    ...options.headers,
  };
  if (token) headers = { Authorization: `Bearer ${token}`, ...headers };
  if (uuid) {
    headers = { ...headers, "m-device-id": uuid };
  } else {
    const newUuid = uuidv4();
    setCookie("uuid", newUuid);
    headers = { ...headers, "m-device-id": newUuid };
  }

  return request({
    baseURL: API_URL,
    responseType: "json",
    ...options,
    headers,
  });
};

export default api;
