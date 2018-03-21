import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const LandingTablet = Loadable({
  loader: () => import(/* webpackChunkName: "landingTablet" */ './LandingTablet'),
  loading: Loading,
  delay: 200
})

export default LandingTablet
