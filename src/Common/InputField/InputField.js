import React, { PureComponent } from 'react'

class InputField extends PureComponent {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.props.change({ [this.props.name]: e.target.value })
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
    )
  }
}

export default InputField
