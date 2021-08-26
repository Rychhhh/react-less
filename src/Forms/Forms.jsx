import React, { Component } from "react";

class From extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle Submit
  handleSubmit(event) {
    alert("Name Telah Ditambahkan " + this.state.value);
    event.preventDefault();
  }

  // Handle Change
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <span className="mt-3">{this.state.value}</span>
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name : <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default From;
