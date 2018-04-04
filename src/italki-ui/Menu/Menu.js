import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import './menu.css';

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
    const { label, open } = this.state;
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
          {label ? label : 'Dropdown Menu'}
          <span className={arrowClassNames} />
        </div>
        <div className="menu-items">
          {React.Children.map(children, (item, index) => {
            if (item.props.label.indexOf(label) !== -1) {
              return React.cloneElement(item, {
                actived: index === this.state.selected,
                index,
                onClick: this.setActive,
              });
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
