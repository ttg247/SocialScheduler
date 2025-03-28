import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000/api", // Change this to match your Laravel API URL
  headers: { "Content-Type": "application/json" }
});

// Attach Authorization token automatically to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
