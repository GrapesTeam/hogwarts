import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PublicRoute extends Component {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
  };

  render() {
    const { isLogin, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          const token = localStorage.getItem('kp.token');
          if (!isLogin && !token) {
            return <Component {...props} />;
          }

          if (!isLogin && token) {
            return <p>logining now</p>;
          }

          if (isLogin) {
            return (
              <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
              />
            );
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(PublicRoute);
