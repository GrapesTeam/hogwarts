import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  render() {
    const { auth } = this.props;

    return (
      <header>
        <NavLink exact to="/">home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/teachers">teachers page</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/landing">Landing</NavLink>
        &nbsp;|&nbsp;
        {auth.isLogin ? <NavLink to="/logout">logout</NavLink> : <NavLink to="/login">login</NavLink>}
        &nbsp;|&nbsp;
        {auth.isLogin ? <NavLink to="/logout">logout</NavLink> : <NavLink to="/signup">sign up</NavLink>}
        &nbsp;|&nbsp;
        <NavLink to="/profile">Profile</NavLink>
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
