import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "signup" */ './SignUp'),
  loading: Loading,
  delay: 200
});

export const SignUpTablet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/tablet/signup" */ './SignUpTablet'),
  loading: Loading,
  delay: 200
});

export const SignUpMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/mobile/signup" */ './SignUpMobile'),
  loading: Loading,
  delay: 200
});

export default SignUp;
