import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from './authModule';
import WithSignUp from './WithSignUp';
import GeeTest from 'Common/GeeTest';
import InputField from 'Common/InputField';

class SignUp extends Component {
  static propTypes = {
    captcha: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  handleClick = () => {
    this.geeTest.verify();
  };

  render() {
    const { auth } = this.props;

    return (
      <div className="Login">
        <p>
          I am <strong>desktop</strong> login
        </p>
        <p>username: {auth.name}</p>
        <div>
          <label id="nickname">User name</label>
          <InputField
            name="nickname"
            type="text"
            placeholder="Enter nickname"
            change={this.props.change}
          />
        </div>
        <hr />
        <div>
          <label id="email">Email</label>
          <InputField
            name="email"
            type="email"
            placeholder="Enter email"
            change={this.props.change}
          />
        </div>
        <hr />
        <div>
          <label id="password">Password</label>
          <InputField
            name="password"
            type="password"
            change={this.props.change}
          />
        </div>
        <GeeTest
          ref={instance => {
            this.geeTest = instance;
          }}
          data={auth.captcha}
          onSuccess={this.props.handleSignUp}
        >
          <button
            disabled={!auth.captchaReady}
            type="button"
            onClick={this.handleClick}
          >
            Sign Up
          </button>
        </GeeTest>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  ...actions
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSignUp
)(SignUp);
