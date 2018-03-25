import axios from 'axios';
import qs from 'qs';

const api = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  transformRequest: [
    (data, headers) => {
      return qs.stringify(data);
    }
  ]
});

if (process.env.NODE_ENV === 'production') {
  api.defaults.baseURL = process.env.REACT_APP_API_URL_PROD;
} else {
  api.defaults.baseURL = process.env.REACT_APP_API_URL_DEV;
}

api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default api;
