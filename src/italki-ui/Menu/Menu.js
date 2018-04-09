import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import MenuItem from './MenuItem';
import './menu.css';

export const MenuContext = React.createContext({
  label: '',
  selected: -1,
});

class Menu extends Component {
  static defaultProps = {
    search: false,
    placeholder: 'Please select',
  };

  state = {
    selected: this.props.selected || -1,
    open: false,
    value: '',
    label: '',
    searchText: '',
  };

  componentWillMount() {
    document.addEventListener('click', this.closeMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu);
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
      searchText: '',
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
      searchText: this.search.value,
    });
  };

  renderInput() {
    const placeholder = this.placeholder || this.props.placeholder;
    return (
      <input
        placeholder={placeholder}
        type="text"
        ref={search => (this.search = search)}
        onChange={this.handleInputChange}
      />
    );
  }

  renderChoice() {
    const { children, placeholder } = this.props;
    let choice;
    const childrenArr = React.Children.toArray(children);
    if (/^\d+G\d+$/.test(this.state.selected)) {
      const groupIndex = this.state.selected.split('G')[0];
      const choiceIndex = this.state.selected.split('G')[1];
      choice =
        childrenArr[groupIndex - 1] &&
        childrenArr[groupIndex - 1].props.children[choiceIndex - 1] &&
        childrenArr[groupIndex - 1].props.children[choiceIndex - 1].props
          .children;
    }
    if (typeof this.state.selected === 'number') {
      choice =
        childrenArr[this.state.selected - 1] &&
        childrenArr[this.state.selected - 1].props.children;
    }
    choice = choice || placeholder;
    return choice;
  }

  checkChildren = child => {
    if (child.props.children && typeof child.props.children !== 'string') {
      return React.Children.forEach(child.props.children, this.checkChildren);
    }
    return (
      child.props.children &&
      child.props.children.indexOf(this.state.searchText) > -1
    );
  };

  flatterned = [];
  flattenChildren = children => {
    React.Children.forEach(children, child => {
      if (child.props.children && typeof child.props.children !== 'string') {
        return React.Children.forEach(
          child.props.children,
          this.flattenChildren
        );
      }
      this.flatterned.push(child.props.children);
    });
    return this.flatterned;
  };

  renderOptions() {
    const { children } = this.props;
    const { searchText } = this.state;

    let noResults = true;
    const flattenedChildren = this.flattenChildren(this.props.children);
    for (let i = 0; i < flattenedChildren.length; i++) {
      if (
        flattenedChildren[i] &&
        flattenedChildren[i].indexOf(this.state.searchText) > -1
      ) {
        noResults = false;
        break;
      }
    }
    const regx = new RegExp(searchText);
    return noResults ? (
      <MenuItem disabled>No Results</MenuItem>
    ) : (
      React.Children.map(
        children,
        (item, key) =>
          item.type.name === 'EnhancedMenuGroup' ||
          regx.test(flattenedChildren[key])
            ? React.cloneElement(item, {
                selected: this.state.selected,
                index: key + 1,
                setActive: this.setActive,
                searchText,
              })
            : null
      )
    );
  }

  render() {
    const { classname, search, style } = this.props;
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
          {this.renderChoice()}
          <span className={arrowClassNames} />
        </div>
        <div className="menu-items">
          <MenuContext.Provider value={{ label, selected }}>
            {this.renderOptions()}
          </MenuContext.Provider>
        </div>
      </div>
    );
  }
}

export default Menu;
