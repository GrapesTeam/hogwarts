import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const LoadingComponent = ({ pastDelay, error }) => {
  if (pastDelay) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const Teachers = Loadable({
  loader: () => import(/* webpackChunkName: "teachers" */ 'Teachers'),
  loading: LoadingComponent,
  delay: 200
});

const Landing = Loadable({
  loader: () => import(/* webpackChunkName: "landing" */ 'Landing'),
  loading: LoadingComponent,
  delay: 200
})

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
