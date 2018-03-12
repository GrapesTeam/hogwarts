import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const MyLoadingComponent = ({ pastDelay, error }) => {
  if (pastDelay) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const About = Loadable({
  loader: () => import('../About'),
  loading: MyLoadingComponent,
  delay: 200
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/about">About</Link>
        <hr />
        <div className="container">
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
