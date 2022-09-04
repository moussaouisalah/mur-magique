import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  }
  return response;
});

export default axios;
