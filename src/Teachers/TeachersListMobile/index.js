import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const TeachersListMobile = Loadable({
  loader: () => import(/* webpackChunkName: "teacher-list-mobile" */ './TeachersListMobile'),
  loading: Loading,
  delay: 200
})

export default TeachersListMobile
