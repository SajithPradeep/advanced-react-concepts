import { Component } from "react";
import Parent from "./ParentElement";

// This is a simple example for using the Parent component
// And accessing the child elements wrapped inside the Parent
class ChildElement extends Component {
  render() {
    return (
      // There are 4 immediate child elements here
      <Parent>
        {/* Removed the parent div from here */}
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
        <div>Child 4</div>
      </Parent>
    );
  }
}

export default ChildElement;
