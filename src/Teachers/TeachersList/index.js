import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const TeachersList = Loadable({
  loader: () => import(/* webpackChunkName: "teacher-list" */ './TeachersList'),
  loading: Loading,
  delay: 200
})

export default TeachersList
