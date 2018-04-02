import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../authModule';
import GeeTest from 'Common/GeeTest';

class SignUpTablet extends Component {
  static propTypes = {
    captcha: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { auth, captcha, history } = this.props;
    if (auth.isLogin) {
      return history.replace('/');
    }
    captcha();
  }

  componentWillReceiveProps(nextProps) {
    const { auth, location: { state } } = nextProps;
    if (auth.isLogin) {
      if (state && state.from) {
        this.props.history.push(nextProps.location.state.from);
      } else {
        this.props.history.push('/profile');
      }
    }
  }

  handleClick = () => {
    this.geeTest.verify();
  };

  handleSignUp = captcha => {
    this.props.signUp({
      ...captcha,
      nickname: this.refs.nickname.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    });
  };

  render() {
    const { auth } = this.props;

    return (
      <div className="Login">
        <p>
          I am <strong>tablet</strong> login
        </p>
        <p>username: {auth.name}</p>
        <div>
          <label id="nickname">User name</label>
          <input
            name="nickname"
            type="text"
            placeholder="Enter nickname"
            ref="nickname"
          />
        </div>
        <hr />
        <div>
          <label id="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            ref="email"
          />
        </div>
        <hr />
        <div>
          <label id="password">Password</label>
          <input name="password" type="password" ref="password" />
        </div>
        <GeeTest
          ref={instance => {
            this.geeTest = instance;
          }}
          data={auth.captcha}
          onSuccess={this.handleSignUp}>
          <button
            disabled={!auth.captchaReady}
            type="button"
            onClick={this.handleClick}>
            Sign Up
          </button>
        </GeeTest>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpTablet);
