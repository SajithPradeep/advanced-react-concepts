import React, { Component, Children } from "react";

class Parent extends Component {
  render() {
    const { children } = this.props;
    const button = Children.map(children, (child) => {
      return <button>{child}</button>;
    });
    return (
      <>
        <div>{Children.count(children)}</div>
        <div>{Children.toArray(children)}</div>
        {button}
      </>
    );
  }
}

export default Parent;
