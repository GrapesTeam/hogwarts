import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteWithSubRoutes } from 'routes';
import Header from './Header';
import { actions as authActions } from 'Auth/authModule';
import { actions } from './localeModule';
import './App.css';

class App extends Component {
  static defaultProps = {
    routes: [],
  };

  static childContextTypes = {
    device: PropTypes.string.isRequired,
  };

  getChildContext() {
    return {
      device: this.props.device,
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('kp.token');
    if (token) {
      this.props.login({ i_token: token });
    }
  }

  render() {
    const { auth, device, lang, routes, switchLan } = this.props;
    return (
      <div className="App">
        <Header isLogin={auth.isLogin} lang={lang} switchLan={switchLan} />
        cn
        <div className="container">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} device={device} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  lang: state.locale.lang,
});

const mapDispatchToProps = {
  ...actions,
  ...authActions,
};

let AppEnhancer;
if (process.env.NODE_ENV === 'production') {
  AppEnhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(App);
} else {
  const DebugTool = WrappedComponent =>
    class extends Component {
      render() {
        const DevTools = require('DevTools/DevTools').default;
        return (
          <div>
            <WrappedComponent {...this.props} />
            {window.__REDUX_DEVTOOLS_EXTENSION__ ? null : <DevTools />}
          </div>
        );
      }
    };

  AppEnhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    DebugTool
  )(App);
}

export default AppEnhancer;
