import React from 'react';

class Track extends React.Component {
  onClick(e) {
    console.log(e.target, Date());
  };

  remapChildren(children) {
    const { onClick } = this;
    return React.Children.map(children, child => {
      if (typeof child.type === "string") {
        return React.cloneElement(child, { onClick });
      } else if (React.Children.count(child.props.children)) {
        return React.cloneElement(child, {
          children: this.remapChildren(child.props.children)
        });
      }
    });
  }

  render() {
    return this.remapChildren(this.props.children);
  }
}

export default Track;
