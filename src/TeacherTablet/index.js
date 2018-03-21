import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const TeacherTablet = Loadable({
  loader: () => import(/* webpackChunkName: "teacher-tablet" */ './TeacherTablet'),
  loading: Loading,
  delay: 200
})

export default TeacherTablet
