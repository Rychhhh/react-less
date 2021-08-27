import React, { Component } from "react";
import CountersNext from "./counter_next";

class mCounters extends Component {
  render() {
    const { onReset, onAdd, onDelete, counters } = this.props;
    console.log("Counter - Render");

    return (
      <React.Fragment>
        <div className="mt-3 text-center">
          <button onClick={onReset} className="btn btn-success mb-3">
            Reset
          </button>
          {/* Compiling Components */}
          {counters.map((counter) => (
            <CountersNext key={counter.id} onAdd={onAdd} onDelete={onDelete} counter={counter}>
              <h4>Judul ke {counter.id}</h4>
            </CountersNext>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default mCounters;
