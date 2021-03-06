import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './Profile'),
  loading: Loading,
  delay: 200,
});

export const ProfileTablet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/tablet/profile" */ './Tablet/ProfileTablet'),
  loading: Loading,
  delay: 200,
});

export const ProfileMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/mobile/profile" */ './Mobile/ProfileMobile'),
  loading: Loading,
  delay: 200,
});

export default Profile;
