import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use((response) => {
  if (response.status === 403) {
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  }
  console.log(response);
  return response;
});

export default axios;
