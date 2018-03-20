import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink exact to="/">home</NavLink>
        <hr />
        <NavLink to="/teachers">teachers page</NavLink>
        <hr />
        <NavLink to="/landing">Landing</NavLink>
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
