import Loadable from 'react-loadable';
import Loading from 'Common/Loading';

const Teacher = Loadable({
  loader: () => import(/* webpackChunkName: "teacher" */ './Teacher'),
  loading: Loading,
  delay: 200
});

export const TeacherTablet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/tablet/teacher" */ './TeacherTablet'),
  loading: Loading,
  delay: 200
});

export const TeacherMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "/mobile/teacher" */ './TeacherMobile'),
  loading: Loading,
  delay: 200
});

export default Teacher;
