import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './LoginDesktop'),
  loading: Loading,
  delay: 200,
});

export const LoginTablet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/tablet/login" */ './Tablet/LoginTablet'),
  loading: Loading,
  delay: 200,
});

export const LoginMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/mobile/login" */ './Mobile/LoginMobile'),
  loading: Loading,
  delay: 200,
});

export default Login;
