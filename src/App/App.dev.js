import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Routes, { RouteWithSubRoutes } from 'routes';
import { connect } from 'react-redux'
import Header from './Header'
import DevTools from 'DevTools/DevTools'
import './App.css';

class App extends Component {
  static childContextTypes = {
    device: PropTypes.string.isRequired
  }

  getChildContext() {
    return ({
      device: this.props.device
    })
  }

  render() {
    const { auth } = this.props

    return (
      <div className="App">
        <Header auth={auth} />
        <div className="container">
          {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        {window.__REDUX_DEVTOOLS_EXTENSION__ ? null : <DevTools />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App);
