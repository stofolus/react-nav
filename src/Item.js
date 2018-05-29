import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li>
        {this.props.text}
        <button
          type="button"
          onClick={() => this.props.removeFunc(this.props.index)}
        >
          X
        </button>
      </li>
    );
  }
}

export default Item;
