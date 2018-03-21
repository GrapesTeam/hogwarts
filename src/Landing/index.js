import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const Landing = Loadable({
  loader: () => import(/* webpackChunkName: "landing" */ './Landing'),
  loading: Loading,
  delay: 200
})

export default Landing
