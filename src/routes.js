import React from 'react';
import { Route } from 'react-router-dom';
import Landing from 'Landing'
import Teachers from 'Teachers'

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const routes = [
  {
    path: '/teacher*',
    component: Teachers
  },
  {
    path: '/landing',
    component: Landing
  }
]

export default routes
