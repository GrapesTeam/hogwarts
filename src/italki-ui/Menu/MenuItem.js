// @flow
import * as React from 'react';
import { MenuContext } from './Menu';

type Props = {
  children?: React.Node,
  index: number | string,
  onClick?: Function,
  setActive: Function,
  actived: boolean,
  value: string,
  label: string,
};

class MenuItem extends React.PureComponent<Props> {
  static defaultProps = {
    value: '',
  };

  handleClick = () => {
    this.props.setActive({
      index: this.props.index,
      value: this.props.value,
      label: this.props.label,
    });
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { children, index } = this.props;
    return (
      <MenuContext.Consumer>
        {selected => (
          <div className="menu-item" onClick={this.handleClick}>
            {selected === index ? <div className="checkmark" /> : null}
            <div>{children}</div>
          </div>
        )}
      </MenuContext.Consumer>
    );
  }
}

export default MenuItem;
