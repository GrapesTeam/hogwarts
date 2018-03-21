import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Routes, { RouteWithSubRoutes } from 'routes';
import Header from './Header'
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
      </div>
    );
  }
}

export default App;
