import axios from 'axios';


const api = axios.create({
  credentials: true
});

if (process.env.NODE_ENV === 'production') {
  api.defaults.baseURL = process.env.REACT_APP_API_URL_PROD
} else {
  api.defaults.baseURL = 'https://xwww.italki.com/api'
}

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
