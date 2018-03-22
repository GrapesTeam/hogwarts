import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'Auth/module/auth'

class LoginMobile extends Component {
  handleClick = () => {
    this.props.login({
      username: this.refs.username.value
    })
  }

  render() {
    const { auth } = this.props
    return (
      <div className="Login">
        <p>I am <strong>mobile</strong> login</p>
        <p>username: {auth.name}</p>
        <div>
          <label id="username">User name</label>
          <input name="username" type="text" placeholder="Enter username" ref="username" />
        </div>
        <hr />
        <div>
          <label id="password">Password</label>
          <input name="password" type="password" ref="password" />
        </div>
        <button type="button" onClick={this.handleClick}>login</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginMobile)
