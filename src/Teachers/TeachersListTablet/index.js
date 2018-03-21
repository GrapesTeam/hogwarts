import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const TeachersListTablet = Loadable({
  loader: () => import(/* webpackChunkName: "teacher-list-tablet" */ './TeachersListTablet'),
  loading: Loading,
  delay: 200
})

export default TeachersListTablet
