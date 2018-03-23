import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import GeeTest from 'Common/GeeTest'
import { actions } from 'Auth/module/auth'
import withLogin from './withLogin'
import InputField from 'Common/InputField'

class LoginTablet extends Component {
  static propTypes = {
    captcha: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  handleClick = () => {
    this.geeTest.verify();
  }

  render() {
    const { auth, change, handleLogin } = this.props

    return (
      <div className="Login">
        <p>I am <strong>desktop</strong> login</p>
        <div>
          <label id="email">User name</label>
          <InputField
            name="email"
            type="email"
            placeholder="enter email"
            change={change}
          />
        </div>
        <hr />
        <div>
          <label id="password">Password</label>
          <input name="password" type="password" ref="password" />
        </div>
        <GeeTest ref={instance => { this.geeTest = instance; }} data={auth.captcha} onSuccess={handleLogin}>
          <button disabled={!auth.captchaReady} type="button" onClick={this.handleClick}>login</button>
        </GeeTest>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  ...actions
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLogin
)(LoginTablet)
