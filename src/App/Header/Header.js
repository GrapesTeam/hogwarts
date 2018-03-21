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
        <hr />
        <NavLink to="/teachers">teachers page</NavLink>
        <hr />
        <NavLink to="/landing">Landing</NavLink>
        <hr />
        {auth.name ? <NavLink to="/logout">logout</NavLink> : <NavLink to="/login">login</NavLink>}
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
