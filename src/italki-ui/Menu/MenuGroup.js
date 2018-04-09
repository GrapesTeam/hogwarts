// @flow
import * as React from 'react';

type Props = {
  name: string,
  children: React.Node,
  index: number,
  selected: number,
  setActive: Function,
};

const MenuGroup = ({ children, index, name, selected, setActive }: Props) => (
  <div className="menu-group">
    <h1 className="menu-group-name">{name}</h1>
    {React.Children.map(children, (item, key) => {
      return React.cloneElement(item, {
        actived: key === selected,
        index: `${index}G${key}`,
        setActive: setActive,
      });
    })}
  </div>
);

export default MenuGroup;
