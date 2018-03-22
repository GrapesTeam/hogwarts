import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from 'Common/ProtectedRoute'
import PublicRoute from 'Common/PublicRoute'
import Landing, { LandingTablet, LandingMobile } from 'Landing'
import Login, { LoginTablet, LoginMobile } from 'Auth/Login'
import Profile, { ProfileTablet, ProfileMobile } from 'Profile'
import SignUp, { SignUpTablet, SignUpMobile } from 'Auth/SignUp'
import Teachers from 'Teachers'
import device from 'current-device'

export const RouteWithSubRoutes = route => (
  <Route
    {...route}
    render={props => {
      let Component = route.desktop
      if (device.type === 'tablet') Component = route.tablet
      if (device.type === 'mobile') Component = route.mobile
      if (route.protected) {
        return <ProtectedRoute {...props} component={Component} />
      } else if (route.public) {
        return <PublicRoute {...props} component={Component} />
      } else {
        return <Component {...props} />
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
  },
  {
    path: '/login',
    desktop: Login,
    mobile: LoginMobile,
    tablet: LoginTablet
  },
  {
    path: '/profile',
    desktop: Profile,
    mobile: ProfileMobile,
    tablet: ProfileTablet,
    protected: true
  },
  {
    path: '/signup',
    desktop: SignUp,
    mobile: SignUpMobile,
    tablet: SignUpTablet
  }
]

export default routes
