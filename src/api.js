import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xdonghai.italki.com/api',
  credentials: true
});

api.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default api;
