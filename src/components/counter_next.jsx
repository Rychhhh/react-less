import React, { Component } from "react";

class CountersNext extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Props Children */}
        {this.props.children}
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onAdd(this.props.counter)} className="btn btn-secondary">
          +
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger ms-3">
          Delete
        </button>
      </React.Fragment>
    );
  }

  // Get Classes
  getClasses() {
    let classes = "badge me-3 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Format Count
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default CountersNext;
