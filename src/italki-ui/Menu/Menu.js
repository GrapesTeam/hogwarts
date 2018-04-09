import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import './menu.css';

export const MenuContext = React.createContext({
  selected: -1,
});

class Menu extends Component {
  static defaultProps = {
    search: false,
  };

  state = {
    selected: -1,
    open: false,
    value: '',
    label: '',
  };

  componentWillMount() {
    document.addEventListener('click', this.closeMenu);
  }

  closeMenu = event => {
    if (this.state.open) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (this.props.search) {
          this.search.blur();
        }
        this.setState({
          ...this.state,
          open: false,
        });
      }
    }
  };

  openMenu = () => {
    if (this.props.search) {
      this.search.focus();
      this.search.setSelectionRange(
        this.search.value.length * 2,
        this.search.value.length * 2
      );
    }
    this.setState({
      ...this.state,
      open: true,
      label: '',
    });
  };

  setActive = actived => {
    this.placeholder = actived.label;
    this.setState({
      open: false,
      selected: actived.index,
      value: actived.value,
      label: actived.label,
    });
  };

  handleInputChange = () => {
    this.setState({
      ...this.state,
      label: this.search.value,
    });
  };

  renderInput() {
    const placeholder = this.placeholder || 'Hint text';
    return (
      <input
        placeholder={placeholder}
        type="text"
        ref={search => (this.search = search)}
        onChange={this.handleInputChange}
      />
    );
  }

  render() {
    const { children, classname, search, style } = this.props;
    const { label, open, selected } = this.state;
    const classnames = cx('menu', classname, {
      'menu-hide': !open,
    });
    const arrowClassNames = cx({
      'arrow-down': !open,
      'arrow-up': open,
    });
    return (
      <div className={classnames} style={style}>
        {search ? this.renderInput() : null}
        <div onClick={this.openMenu} className="menu-title">
          {label || 'Dropdown Menu'}
          <span className={arrowClassNames} />
        </div>
        <div className="menu-items">
          <MenuContext.Provider value={selected}>
            {React.Children.map(
              children,
              (item, key) =>
                item.type.name === 'MenuGroup' ||
                item.props.label.indexOf(label) !== -1
                  ? React.cloneElement(item, {
                      selected: this.state.selected,
                      index: key,
                      setActive: this.setActive,
                    })
                  : null
            )}
          </MenuContext.Provider>
        </div>
      </div>
    );
  }
}

export default Menu;
