// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  index: number,
  onClick: Function,
  actived: boolean,
};

class MenuItem extends React.Component<Props> {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    const { actived, children, setActive } = this.props;
    return (
      <div className="menu-item" onClick={this.handleClick}>
        {actived ? <div class="checkmark" /> : null}
        {children}
      </div>
    );
  }
}

export default MenuItem;
