import React, { Component } from "react";

class Counter extends Component {

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new data from  server
    }
  }

  render() {
    console.log('Counter-rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={()=> this.props.onIncrement(this,props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
