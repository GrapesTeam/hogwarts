import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './SignUpDesktop'),
  loading: Loading,
  delay: 200,
});

export const SignUpTablet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/tablet/signup" */ './Tablet/SignUpTablet'),
  loading: Loading,
  delay: 200,
});

export const SignUpMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/mobile/signup" */ './Mobile/SignUpMobile'),
  loading: Loading,
  delay: 200,
});

export default SignUp;
