import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GeeTest extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onSuccess: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    const { data, onSuccess } = nextProps;
    if (!window.geeCaptcha && nextProps.data) {
      window.initGeetest(
        {
          gt: data.gt,
          challenge: data.challenge,
          offline: !data.success,
          new_captcha: data.new_captcha,
          product: 'bind',
          width: '300px'
        },
        captchaObj => {
          captchaObj.onReady(() => {
            window.geeCaptcha = captchaObj;
          });
          captchaObj.onSuccess(function() {
            const result = {
              ...captchaObj.getValidate(),
              'g-recaptcha-response': process.env.REACT_APP_GEE_TEST
            };
            onSuccess(result);
          });
        }
      );
    }
  }

  verify() {
    window.geeCaptcha.verify();
  }

  render() {
    return <div className="geetest">{this.props.children}</div>;
  }
}

export default GeeTest;
