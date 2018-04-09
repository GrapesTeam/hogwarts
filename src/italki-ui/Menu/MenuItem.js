// @flow
import * as React from 'react';
import cx from 'classnames';
import { MenuContext } from './Menu';

type Props = {
  children?: React.Node,
  index: number | string,
  onClick?: Function,
  setActive: Function,
  actived: boolean,
  disabled: boolean,
  value: string,
  label: string,
};

class MenuItem extends React.PureComponent<Props> {
  static defaultProps = {
    value: '',
    disabled: false,
  };

  handleClick = () => {
    if (!this.props.disabled) {
      this.props.setActive({
        index: this.props.index,
        value: this.props.value,
        label: this.props.children,
      });
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  };

  render() {
    const { children, disabled, index } = this.props;
    const classnames = cx('menu-item', {
      'menu-item-disabled': disabled,
    });
    return (
      <MenuContext.Consumer>
        {({ selected }) => (
          <div className={classnames} onClick={this.handleClick}>
            {selected === index ? <div className="checkmark" /> : null}
            <div>{children}</div>
          </div>
        )}
      </MenuContext.Consumer>
    );
  }
}

export default MenuItem;
