import React, { Component } from 'react';

const WithLoginProps = WrappedComponent =>
  class extends Component {
    formData = {};

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

    updateValue = newValue => {
      this.formData = {
        ...this.formData,
        ...newValue,
      };
    };

    handleLogin = captcha => {
      this.props.login({
        ...captcha,
        LOGIN_PA_USERNAME: this.formData.email,
        LOGIN_PA_PASSWORD: this.formData.password,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          change={this.updateValue}
          handleLogin={this.handleLogin}
        />
      );
    }
  };

export default WithLoginProps;
