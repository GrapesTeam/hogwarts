import MockAdapter from 'axios-mock-adapter';
import api from 'api';

const mock = new MockAdapter(api);

it('api base url', () => {
  expect(mock.axiosInstance.defaults.baseURL).toBe(process.env.REACT_APP_API_URL_DEV);
})
