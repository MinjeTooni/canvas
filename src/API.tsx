import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:8080",
  // withCredentials: true,
});

const SECURITY_APIS = ["ping"];

API.interceptors.request.use((config) => {
  if (SECURITY_APIS.includes(config.url ?? "")) {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    config.headers.Authorization = null;
  }
  return config;
});

export default API;
