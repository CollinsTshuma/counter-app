import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  handleIncrement = (e) => {
    console.log(e);
    this.setState({count: this.state.count + 1})
  }

  // Passing event arguments
  doHandleIncrement = () => {
    this.handleIncrement({id:1});
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
