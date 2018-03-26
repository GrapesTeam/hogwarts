import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from 'routes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import { actions } from './module/locale';
import './App.css';

class App extends Component {
  static defaultProps = {
    routes: []
  };

  static childContextTypes = {
    device: PropTypes.string.isRequired,
    routes: PropTypes.array
  };

  getChildContext() {
    return {
      device: this.props.device
    };
  }

  render() {
    const { auth, lang, routes, switchLan } = this.props;

    return (
      <div className="App">
        <Header isLogin={auth.isLogin} lang={lang} switchLan={switchLan} />
        <div className="container">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  lang: state.locale.lang
});

const mapDispatchToProps = {
  ...actions
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
