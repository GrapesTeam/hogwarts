import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const Teacher = Loadable({
  loader: () => import(/* webpackChunkName: "teacher" */ './Teacher'),
  loading: Loading,
  delay: 200
})

export default Teacher
