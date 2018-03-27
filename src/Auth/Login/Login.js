import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'Auth/module/auth';
import GeeTest from 'Common/GeeTest';
import InputField from 'Common/InputField';
import WithLoginProps from './WithLoginProps';
import { Helmet } from "react-helmet";

class Login extends Component {
  static propTypes = {
    captcha: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  handleClick = () => {
    this.geeTest.verify();
  };

  render() {
    const { auth, change, handleLogin } = this.props;

    return (
      <div className="Login">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <p>
          I am <strong>desktop</strong> login
        </p>
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
          <InputField
            name="password"
            type="password"
            placeholder="enter email"
            change={change}
          />
        </div>
        <GeeTest
          ref={instance => {
            this.geeTest = instance;
          }}
          data={auth.captcha}
          onSuccess={handleLogin}
        >
          <button
            disabled={!auth.captchaReady}
            type="button"
            onClick={this.handleClick}
          >
            login
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
  WithLoginProps
)(Login);
