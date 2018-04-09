// @flow
import * as React from 'react';
import { MenuContext } from './Menu';

type Props = {
  name: string,
  children: React.Node,
  index: number,
  searchText: string,
  selected: number,
  setActive: Function,
};

class MenuGroup extends React.PureComponent<Props> {
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
    const {
      children,
      index,
      name,
      searchText,
      selected,
      setActive,
    } = this.props;

    let isMatched = false;
    const flattenedChildren = this.flattenChildren(children);
    const regx = new RegExp(searchText);
    for (let i = 0; i < flattenedChildren.length; i++) {
      if (regx.test(flattenedChildren[i])) {
        isMatched = true;
        break;
      }
    }
    return (
      <div className="menu-group">
        {isMatched ? <h1 className="menu-group-name">{name}</h1> : null}
        {React.Children.map(
          children,
          (item, key) =>
            regx.test(flattenedChildren[key])
              ? React.cloneElement(item, {
                  actived: key === selected,
                  index: `${index}G${key + 1}`,
                  setActive,
                })
              : null
        )}
      </div>
    );
  }

  render() {
    return this.renderOptions();
  }
}

const EnhancedMenuGroup = (props: any) => (
  <MenuContext.Consumer>
    {({ label }) => <MenuGroup {...props} label={label} />}
  </MenuContext.Consumer>
);

export default EnhancedMenuGroup;
