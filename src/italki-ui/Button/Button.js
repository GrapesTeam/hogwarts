import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.css';

class Button extends Component {
  static propTypes = {
    classnames: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { classnames, children, ...rest } = this.props;
    return (
      <button type="button" className={classnames} {...rest}>
        {children}
      </button>
    );
  }
}

const withStyle = WrappedComponent =>
  class extends Component {
    static propTypes = {
      iistyle: PropTypes.oneOf([
        'default',
        'main',
        'success',
        'error',
        'instant-tutoring',
      ]),
      size: PropTypes.oneOf(['big', 'standard', 'medium', 'small']),
    };

    static defaultProps = {
      iistyle: 'default',
      size: 'standard',
    };

    render() {
      const { iistyle, size, ...rest } = this.props;
      const classnames = cx(`btn-${iistyle}`, `btn-${size}`);
      return <WrappedComponent {...rest} classnames={classnames} />;
    }
  };

export default withStyle(Button);
