import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './Login'),
  loading: Loading,
  delay: 200
});

export const LoginTablet = Loadable({
  loader: () => import(/* webpackChunkName: "/tablet/login" */ './LoginTablet'),
  loading: Loading,
  delay: 200
});

export const LoginMobile = Loadable({
  loader: () => import(/* webpackChunkName: "/mobile/login" */ './LoginMobile'),
  loading: Loading,
  delay: 200
});

export default Login;
