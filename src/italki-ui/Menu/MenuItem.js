// @flow
import * as React from 'react';

type Props = {
  children?: React.Node,
  index: number,
  onClick: Function,
  actived: boolean,
  value: string,
  label: string,
};

class MenuItem extends React.Component<Props> {
  static defaultProps = {
    value: '',
  };

  handleClick = () => {
    this.props.onClick({
      index: this.props.index,
      value: this.props.value,
      label: this.props.label,
    });
  };

  render() {
    const { actived, children } = this.props;
    return (
      <div className="menu-item" onClick={this.handleClick}>
        {actived ? <div className="checkmark" /> : null}
        <div>{children}</div>
      </div>
    );
  }
}

export default MenuItem;
