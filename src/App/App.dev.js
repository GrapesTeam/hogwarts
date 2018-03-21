import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Routes, { RouteWithSubRoutes } from 'routes';
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
    return (
      <div className="App">
        <Header />
        <div className="container">
          {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        {window.__REDUX_DEVTOOLS_EXTENSION__ ? null : <DevTools />}
      </div>
    );
  }
}

export default App;
