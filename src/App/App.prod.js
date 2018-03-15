import React, { Component } from 'react';
import Routes, { RouteWithSubRoutes } from 'routes';
import Header from './Header'
import './App.css';

class App extends Component {
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
