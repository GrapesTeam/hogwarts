import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">home</Link>
        <hr />
        <Link to="/teachers">teachers page</Link>
        <hr />
        <Link to="/modal-gallery">modal gallery</Link>
        <hr />
      </header>
    )
  }
}

export default Header
