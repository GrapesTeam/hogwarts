import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const TeachersList = Loadable({
  loader: () => import(/* webpackChunkName: "teacherList" */ './TeachersList'),
  loading: Loading,
  delay: 200
})

export const TeachersListTablet = Loadable({
  loader: () => import(/* webpackChunkName: "/tablet/teacherList" */ './TeachersListTablet'),
  loading: Loading,
  delay: 200
})

export const TeachersListMobile = Loadable({
  loader: () => import(/* webpackChunkName: "/mobile/teacherList" */ './TeachersListMobile'),
  loading: Loading,
  delay: 200
})

export default TeachersList
