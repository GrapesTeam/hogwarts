import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'Auth/module/auth'
import GeeTest from 'Common/GeeTest'

class Login extends Component {
  static propTypes = {
    captcha: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { auth, captcha, history } = this.props;
    if (auth.isLogin) {
      return history.replace('/')
    }
    captcha();
  }

  componentWillReceiveProps(nextProps) {
    const { auth, location: { state } } = nextProps
    if (auth.isLogin) {
      if (state && state.from) {
        this.props.history.push(nextProps.location.state.from)
      } else {
        this.props.history.push('/profile')
      }
    }
  }

  handleClick = () => {
    this.geeTest.verify();
  }

  handleLogin = (captcha) => {
    this.props.login({
      ...captcha,
      LOGIN_PA_USERNAME: this.refs.email.value,
      LOGIN_PA_PASSWORD: this.refs.password.value,
    });
  }

  render() {
    const { auth } = this.props

    return (
      <div className="Login">
        <p>I am <strong>desktop</strong> login</p>
        <p>username: {auth.name}</p>
        <div>
          <label id="email">User name</label>
          <input name="email" type="email" placeholder="Enter email" ref="email" />
        </div>
        <hr />
        <div>
          <label id="password">Password</label>
          <input name="password" type="password" ref="password" />
        </div>
        <GeeTest ref={instance => { this.geeTest = instance; }} data={auth.captcha} onSuccess={this.handleLogin}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
