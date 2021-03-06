import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const Landing = Loadable({
  loader: () => import(/* webpackChunkName: "landing" */ './Landing'),
  loading: Loading,
  delay: 200,
});

export const LandingTablet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/tablet/landing" */ './Tablet/LandingTablet'),
  loading: Loading,
  delay: 200,
});

export const LandingMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/mobile/landing" */ './Mobile/LandingMobile'),
  loading: Loading,
  delay: 200,
});

export default Landing;
