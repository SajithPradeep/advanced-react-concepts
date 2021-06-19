import React, { Component } from "react";

const btnStyle = {
  background: "green",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "bold",
  border: "1px solid white",
  marginLeft: "10px",
  padding: "3px",
};

class ParentElement extends Component {
  render() {
    const { children } = this.props;
    // count method is used to count the immediate child elements in this.props.children
    // Even though the count is 4, we are only displaying Child 1
    React.Children.forEach(children, (child) => {
      console.log(child.props.children);
    });
    return (
      <div>
        <p>
          Total Count of Children: {React.Children.count(this.props.children)}
        </p>
        {/* Making use of the only method */}
        {React.Children.map(children, (child) => {
          return <button style={btnStyle}>{child}</button>;
        })}
      </div>
    );
  }
}

export default ParentElement;
