import React from 'react';
import { Route } from 'react-router-dom';
import Landing from 'Landing'
import LandingTablet from 'LandingTablet'
import LandingMobile from 'LandingMobile'
import Teachers from 'Teachers'
import device from 'current-device'

export const RouteWithSubRoutes = route => (
  <Route
    {...route}
    render={props => {
      if (device.type === 'desktop') {
        return (<route.desktop {...props} routes={route.routes} />)
      } else if (device.type === 'tablet') {
        return (<route.tablet {...props} routes={route.routes} />)
      } else if (device.type === 'mobile') {
        return (<route.mobile {...props} routes={route.routes} />)
      } else {
        return (<route.desktop {...props} routes={route.routes} />)
      }
    }}
  />
);

const routes = [
  {
    path: '/teacher*',
    desktop: Teachers,
    mobile: Teachers,
    tablet: Teachers
  },
  {
    path: '/landing',
    desktop: Landing,
    mobile: LandingMobile,
    tablet: LandingTablet
  }
]

export default routes
