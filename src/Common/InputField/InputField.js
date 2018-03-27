import React, { PureComponent } from 'react';

class InputField extends PureComponent {
  handleChange = e => {
    this.props.change({ [this.props.name]: e.target.value });
  };

  render() {
    return (
      <input
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputField;
