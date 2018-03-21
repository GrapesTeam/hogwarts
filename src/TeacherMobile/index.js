import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const TeacherMobile = Loadable({
  loader: () => import(/* webpackChunkName: "teacher-mobile" */ './TeacherMobile'),
  loading: Loading,
  delay: 200
})

export default TeacherMobile
