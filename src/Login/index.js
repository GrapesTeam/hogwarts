import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "teacher" */ './Login'),
  loading: Loading,
  delay: 200
})

export default Login
