import React, { Component } from 'react'

const WithSignUp = (WrappedComponent) => class extends Component {
  formData = {}
  
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

  updateValue = (newValue) => {
    this.formData = {
      ...this.formData,
      ...newValue
    }
  }

  handleSignUp = (captcha) => {
    this.props.signUp({
      ...captcha,
      nickname: this.formData.nickname,
      email: this.formData.email,
      password: this.formData.password,
    });
  }

  render() {
    return (
      <WrappedComponent {...this.props} change={this.updateValue} handleSignUp={this.handleSignUp} />
    )
  }
}

export default WithSignUp
