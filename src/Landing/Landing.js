import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Helmet>
          <title>Landing</title>
        </Helmet>
        <h1>Landing</h1>
      </div>
    );
  }
}

export default Landing;
