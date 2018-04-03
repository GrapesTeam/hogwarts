import React, { Component } from 'react';
import cx from 'classnames';
import './menu.css';

class Menu extends Component {
  state = {
    index: -1,
    open: false,
  };

  openMenu = () => {
    this.setState({
      ...this.state,
      open: !this.state.open,
    });
  };

  setActive = index => {
    this.setState({
      ...this.state,
      index,
    });
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;
    const classnames = cx('menu', {
      'menu-hide': !open,
    });
    const arrowClassNames = cx({
      'arrow-down': !open,
      'arrow-up': open,
    });
    return (
      <div className={classnames}>
        <div onClick={this.openMenu} className="menu-title">
          Dropdown Menu
          <span className={arrowClassNames} />
        </div>
        <div className="menu-items">
          {React.Children.map(children, (item, index) =>
            React.cloneElement(item, {
              index,
              onClick: this.setActive,
            })
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
