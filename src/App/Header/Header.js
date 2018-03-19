import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">home</Link>
        <hr />
        <Link to="/teachers">teachers page</Link>
        <hr />
        <Link to="/landing">Landing</Link>
        <hr />
        <FormattedMessage
          id="ML026"
          defaultMessage="Hello Michael Hsu!"
        />
      </header>
    )
  }
}

export default Header
